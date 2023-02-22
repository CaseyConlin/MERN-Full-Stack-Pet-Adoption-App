import queryString from "query-string";
import { useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { SearchBar } from "./searchBar";
import { PetCard } from "./petCard";
import { Pagination } from "./pagination";

export const PetSearchPage: Function = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const pets = useLoaderData() as PetData;

  useEffect(() => {
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const clearQuery: React.MouseEventHandler = () => {
    return setSearchParams({});
  };

  //Pagination data.
  const resultsCount = pets.totalPetsResults;
  const limit: number = Number(searchParams.get("limit") || 6);
  const page: number = Number(searchParams.get("page") || 1);
  const pages: number = Math.trunc(Math.ceil(resultsCount / limit));
  let pageList: number[] = [];
  if (resultsCount) {
    pageList = [...Array(pages + 1).keys()].slice(1);
  }
  const next = page < pages ? page + 1 : page;
  const previous = page > 1 ? page - 1 : page;

  const paginationQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: key, id: value } = e.currentTarget as HTMLButtonElement;
    let parsed = queryString.parse(window.location.search);

    if (!parsed[key]) {
      //No key present in current search params, set search params.
      parsed[key] = value;
    } else if (value !== parsed[key]) {
      //Key present but value is new in current search params,
      //update params value.
      delete parsed[key];
      parsed[key] = value;
    }

    const stringified = queryString.stringify(parsed);
    setSearchParams(stringified);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sortQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: key, id: value } = e.currentTarget as HTMLButtonElement;
    let parsed = queryString.parse(window.location.search);

    if (!parsed[key]) {
      //No key present in current search params, set search params.
      parsed[key] = value;
    } else if (key in parsed && value === parsed[key]) {
      //Key and value match current search params, delete search params from query.
      delete parsed[key];
    } else if (value !== parsed[key]) {
      //Key present but value is new in current search params,
      //update params value.
      parsed[key] = value;
    }
    delete parsed["page"];

    const stringified = queryString.stringify(parsed);
    setSearchParams(stringified);
  };

  const speciesQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: key, id: value } = e.currentTarget as HTMLButtonElement;
    let parsed = queryString.parse(window.location.search);

    if (!Array.isArray(parsed.species)) {
      parsed.species = [parsed.species];
    }

    if (!parsed[key]) {
      //No key present in current search params, append sort search params.
      parsed[key] = value;
    } else if (key in parsed && value === parsed[key]) {
      //Key and value match current sort search params, remove sort search params.
      delete parsed[key];
    } else if (!parsed.species.includes(value)) {
      parsed.species.push(value);
    } else if (parsed.species.includes(value)) {
      parsed.species = parsed.species!.filter((element: any) => {
        return element !== value;
      });
    }
    delete parsed["page"];

    const stringified = queryString.stringify(parsed);
    setSearchParams(stringified);
  };

  return (
    <div className={"container mx-auto px-4"}>
      <SearchBar
        clearQuery={clearQuery}
        sortQuery={sortQuery}
        speciesQuery={speciesQuery}
      />

      <ul className="flex flex-row flex-wrap justify-evenly gap-x-1 gap-y-7 my-5">
        {pets.data.length !== 0 ? (
          pets.data.map((pet: PetCard) => (
            <PetCard
              key={pet._id}
              species={pet.species}
              _id={pet._id}
              name={pet.name}
              fee={pet.fee}
              image={pet.image}
              gender={pet.gender}
              age={pet.age}
              dateAddedToSite={pet.dateAddedToSite}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center my-4">
            <h3 className="text-center mb-4">
              Woof... We're having trouble finding pets right now.
            </h3>
          </div>
        )}
      </ul>

      <div className="flex my-20">
        <Pagination
          pageList={pageList}
          next={next}
          previous={previous}
          paginationQuery={paginationQuery}
        />
      </div>
    </div>
  );
};
