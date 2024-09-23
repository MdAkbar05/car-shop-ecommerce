const deleteImage = require("../Helpers/deleteImage");
const Car = require("../Models/carModel");

// Get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new car
const createCar = async (req, res) => {
  const { carName, carBrand, price, mileage, fuelType, description } = req.body;

  const carImage = req.file ? `/carImages/${req.file.filename}` : "";
  try {
    const newCar = new Car({
      carName,
      carBrand,
      price,
      mileage,
      fuelType,
      carImage,
      description,
    });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update car details
const updateCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findById(id);
  if (!car)
    return res.status(404).json({ message: "Car not found with this id" });
  const { carName, carBrand, price, mileage, fuelType, description } = req.body;

  const carImage = req.file ? `/carImages/${req.file.filename}` : undefined;

  // If a new image is provided, delete the old image
  if (carImage && car.carImage) {
    deleteImage(car.carImage);
  }

  try {
    const updatedCar = await Car.findByIdAndUpdate(
      id,
      {
        carName,
        carBrand,
        price,
        mileage,
        fuelType,
        description,
        ...(carImage && { carImage }), // Only update image if a new one is provided
      },
      { new: true } // Return the updated document
    );
    if (!updatedCar) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a car
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    // Delete the car image if it exists
    if (car.carImage) {
      deleteImage(car.carImage);
    }
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };
