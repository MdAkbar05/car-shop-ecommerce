import React, { useEffect, useState } from "react";
import { updateCar } from "../../../features/carSlice";
import { useDispatch } from "react-redux";

const UpdateCar = ({ car }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    carBrand: car?.carBrand || "",
    carName: car?.carName || "",
    fuelType: car?.fuelType || "",
    mileage: car?.mileage || "",
    price: car?.price || "",
    description: car?.description || "",
    carImage: null, // For file upload
  });

  useEffect(() => {
    setFormData({
      carBrand: car?.carBrand || "",
      carName: car?.carName || "",
      fuelType: car?.fuelType || "",
      mileage: car?.mileage || "",
      price: car?.price || "",
      description: car?.description || "",
      carImage: null, // For file upload
    });
  }, [car]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "carImage") {
      setFormData({ ...formData, carImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCar({ id: car._id, carData: formData }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary p-6 rounded-lg mx-32 my-6"
    >
      <h2 className="text-4xl text-center ">Update Car</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-white mb-2">Car Brand</label>
          <input
            type="text"
            name="carBrand"
            value={formData.carBrand}
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-white mb-2">Car Name</label>
          <input
            type="text"
            name="carName"
            value={formData.carName}
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-white mb-2">Fuel Type</label>
          <input
            type="text"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-white mb-2">Mileage</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-white mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
          />
        </div>
        <div className="w-full px-4 mb-4">
          <label className="block text-white mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
            rows="4"
          />
        </div>
        <div className="w-full px-4 mb-4">
          <label className="block text-white mb-2">Car Image</label>
          <input
            type="file"
            name="carImage"
            onChange={handleChange}
            className="w-full bg-black text-white p-2 rounded"
          />
        </div>
      </div>
      <div className="w-full px-4">
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Update Car
        </button>
      </div>
    </form>
  );
};

export default UpdateCar;
