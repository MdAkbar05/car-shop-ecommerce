import React, { useEffect, useState } from "react";
import CardCar from "../../components/Car-card";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCars } from "../../features/carSlice";
import { useLocation } from "react-router-dom";

const Cars = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [filterdCars, setFilterdCars] = useState([]);
  const { cars, status } = useSelector((state) => state.carReducer);

  useEffect(() => {
    dispatch(fetchAllCars());
    setFilterdCars(cars);
  }, []);

  return (
    <div
      id="cars"
      className="customContainer bg-secondary text-black py-8 space-y-4"
    >
      {
        (status === "loading" && (
          <div className="flex justify-center items-center h-full">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )) ||
          (status === "error" && (
            <div>
              <h3>Error fetching data from the server</h3>
            </div>
          )) ||
          (status === "succeeded" && cars.length === 0 && (
            <div>
              <h3>No cars available in the store</h3>
            </div>
          ))

        // Add your other status handling cases here
      }

      <div className="flex gap-8 justify-center cursor-pointer">
        <div className="flexCenter flex-col text-black bg-slate-100 py-1 px-4 shadow-md rounded-lg font-serif flex-wrap">
          <div
            className="text-xl font-medium"
            onClick={() => {
              setFilterdCars(cars);
            }}
          >
            All cars
          </div>
        </div>
        {cars.map((car) => (
          <>
            <div
              key={car._id}
              className="flexCenter flex-col text-black bg-slate-100 py-1 px-4 shadow-md rounded-lg font-serif flex-wrap"
            >
              <div
                className="text-xl font-medium"
                onClick={() => {
                  setFilterdCars(
                    cars.filter((item) => item.carBrand === car.carBrand)
                  );
                }}
              >
                {car.carBrand}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-evenly flex-wrap">
        {filterdCars.length > 0 ? (
          filterdCars.map((car) => (
            <CardCar
              key={car._id}
              img={car.carImage}
              name={car.carName}
              price={car.price}
              id={car._id}
            />
          ))
        ) : cars ? (
          cars.map((car) => (
            <CardCar
              key={car._id}
              img={car.carImage}
              name={car.carName}
              price={car.price}
              id={car._id}
            />
          ))
        ) : (
          <h3> Not available car in store</h3>
        )}
      </div>
    </div>
  );
};

export default Cars;
