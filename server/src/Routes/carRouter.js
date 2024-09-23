const express = require("express");
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const { carImageUpload } = require("../Middlewares/upload");
const carRouter = express.Router();

// Car routes /api/cars/
carRouter.get("/", getAllCars);
carRouter.get("/:id", getCarById);
carRouter.post("/", carImageUpload.single("carImage"), createCar);
carRouter.put("/:id", carImageUpload.single("carImage"), updateCar);
carRouter.delete("/:id", deleteCar);

module.exports = carRouter;
