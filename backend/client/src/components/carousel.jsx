import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPets } from "../services/api";
import { multipleSpeciesStringConverter } from "./helpers";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowCountOffset, setWindowCountOffset] = useState(1);
  const [length, setLength] = useState();
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    fetchPets()
      .then((res) => res.json())
      .then((data) => {
        setPetData(data.data);
        setLength(data.data.length);
      });
  }, []);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const detectWindow = () => {
    if (window.innerWidth >= 640) return setWindowCountOffset(4);
    else if (window.innerWidth >= 768) return setWindowCountOffset(5);
    else return setWindowCountOffset(1);
  };
  useEffect(() => detectWindow(), []);
  //   useEffect(() => {
  //     setLength(children.length);
  //   }, [children]);

  return (
    <div className="carousel-container w-full mt-5 flex flex-col ">
      <div className="carousel-wrapper flex w-full relative">
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="left-arrow absolute z-10 top-1/2 w-12 h-12 -translate-y-1/2 -left-8"
          >
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper overflow-hidden w-full h-full">
          <div
            className="carousel-content flex transition-all w-full sm:w-1/4 md:1/5 duration-700 ease-in-out left-6 "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {petData.map((pet) => (
              <div className=" w-full sm:w-11/12 sm:mx-2 md:mx-3 shrink-0 bg-white border border-gray-200 rounded-lg shadow">
                <img
                  className="w-full rounded-t-lg"
                  src={`/uploads/${pet.image}`}
                  alt="placeholder"
                />
                <div className="px-2 py-2 mb-3">
                  <div className="flexitems-center mb-1 ml-2">
                    <Link to={`/pet/${pet._id}`}>
                      <h5 className=" text-xl mb-2 font-bold tracking-tight text-gray-900">
                        {pet.name}
                      </h5>
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Link
                        to={`/pets/?species=${pet.species}`}
                        className="inline-flex items-center ml-2 px-2 py-1 text-xs font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-800"
                      >
                        {"More " + multipleSpeciesStringConverter(pet.species)}
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                        </svg>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentIndex < length - windowCountOffset && (
          <button
            onClick={next}
            className="right-arrow absolute z-10 top-1/2 w-12 h-12 -translate-y-1/2 -right-8"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
