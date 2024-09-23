import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, fetchAllCars } from "../../../features/carSlice";
import UpdateCar from "./updateCar";
import AddCar from "./AddCar";

const AllCars = () => {
  const [editCar, setEditCar] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(1);
  console.log(editCar);
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.carReducer);
  useEffect(() => {
    // dispatch fetchAllCars action
    dispatch(fetchAllCars());
  }, [dispatch, window.onload]);

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex justify-center gap-8 py-4 bg-slate-800">
          <button
            onClick={() => setShowUpdateModal(1)}
            className="text-lg py-1 px-3 bg-primary rounded-md hover:bg-black"
          >
            All Car
          </button>
          <button
            onClick={() => setShowUpdateModal(3)}
            className="text-lg py-1 px-3 bg-primary rounded-md hover:bg-black"
          >
            Add Car
          </button>
        </div>
        {showUpdateModal == 1 ? (
          <>
            <div className="text-center text-3xl font-sans py-2">
              All Car List
            </div>
            <table className="min-w-full bg-primary border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Car Brand</th>
                  <th className="px-4 py-2 border">Car Image</th>
                  <th className="px-4 py-2 border">Car Name</th>
                  <th className="px-4 py-2 border">Fuel Type</th>
                  <th className="px-4 py-2 border">Mileage</th>
                  <th className="px-4 py-2 border">Price ($)</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td className="px-4 py-2 border">{car.carBrand}</td>
                    <td className="px-4 py-2 border">
                      <img
                        src={car.carImage}
                        alt={car.carName}
                        className="w-12 h-auto"
                      />
                    </td>
                    <td className="px-4 py-2 border">{car.carName}</td>
                    <td className="px-4 py-2 border">{car.fuelType}</td>
                    <td className="px-4 py-2 border">{car.mileage}</td>
                    <td className="px-4 py-2 border">${car.price}</td>
                    <td className="px-4 py-2 border">{car.description}</td>
                    <td className="px-4 py-2 border-t flex gap-x-2">
                      <button
                        onClick={() => {
                          setEditCar(car);
                          setShowUpdateModal(2);
                        }}
                        className="py-1 px-2 rounded-md bg-black "
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(deleteCar(car._id))}
                        className="py-1 px-2 rounded-md bg-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : showUpdateModal == 2 ? (
          <UpdateCar car={editCar} />
        ) : (
          <AddCar />
        )}
      </div>
    </>
  );
};

export default AllCars;
