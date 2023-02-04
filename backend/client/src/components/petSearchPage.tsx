import queryString from "query-string";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { SearchBar } from "./searchBar";
import { PetCard } from "./petCard";
import { useEffect } from "react";

export const PetSearchPage: Function = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // const handleClick = () => {
  //   clicked ? setClicked('') : setClicked('base-state click-state');
  // };
  const pets = useLoaderData() as Pet[];

  useEffect(() => {
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const clearQuery: React.MouseEventHandler = () => {
    return setSearchParams({});
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
        <PetCard pets={pets} />
      </ul>
    </div>
  );
};
