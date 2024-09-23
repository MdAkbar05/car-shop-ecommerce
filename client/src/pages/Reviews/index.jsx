import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, submitReview } from "../../features/reviewSlice"; // Import thunks
import Magnifier from "react-magnifier";

const Review = () => {
  const { car } = useSelector((state) => state.carReducer);
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    review: "",
    rating: 0,
    carId: "", // Pass the car ID to the form data
  });

  const { reviews, loading, error } = useSelector(
    (state) => state.reviewReducer
  );

  const dispatch = useDispatch();

  // Fetch reviews when component mounts
  useEffect(() => {
    if (car && car._id) {
      dispatch(fetchReviews(car._id)); // Fetch reviews for the current car
    }
  }, [dispatch, car]);

  // handle Buy car
  const handleBuyNow = () => {
    // Add the car to the cart or perform any other action required for buying it
    console.log("Buying car:", car);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (e) => {
    setFormData({ ...formData, rating: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (car == null) {
      alert("Please select a car to review");
    } else {
      dispatch(submitReview({ ...formData, carId: car._id })); // Dispatch the submit review action
    }
  };

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="customContainer bg-white">
      <h2 className="text-center text-2xl py-4 text-primary">Car Reviews</h2>

      {/* Car Info */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        {car ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-primary">
                {car.carName}
              </h1>
              <p className="text-gray-700 mb-1">
                Brand: <span className="font-semibold"> {car.carBrand}</span>
              </p>
              <p className="text-gray-700 mb-1">
                Fuel Type:{" "}
                <span className="font-semibold"> {car.fuelType}</span>
              </p>
              <p className="text-gray-700 mb-1">
                Mileage: <span className="font-semibold"> {car.mileage}</span>
              </p>
              <p className="text-gray-700 mb-1">
                Description:{" "}
                <span className="font-semibold"> {car.description}</span>
              </p>
              <p className="text-2xl font-semibold text-red-600">
                ${car.price}
              </p>
              {/* Buy Now / Add to Cart Button */}
              <button
                onClick={() => handleBuyNow(car._id)} // Placeholder for buy action
                className="darkBtn"
              >
                Buy Now
              </button>
            </div>
            <div className="flex justify-center">
              <Magnifier src={car.carImage} width={300} />
            </div>
          </div>
        ) : (
          <p>No car found</p>
        )}
      </div>

      {/* Review List */}
      <div className="p-6 max-w-4xl mx-auto space-y-4 mt-8">
        <h3 className="text-xl font-semibold text-primary">Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review._id}
              className="border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-lg text-primary">
                  {review.clientName}
                </h4>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)} / 5
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
              <p className="text-sm text-gray-400">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Review Form */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Write a Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="clientName" className="font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="clientName"
              onChange={handleInputChange}
              value={formData.clientName}
              placeholder="Enter your name"
              className="p-2 mt-1 w-full text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="clientEmail"
              className="font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="clientEmail"
              onChange={handleInputChange}
              value={formData.clientEmail}
              placeholder="Enter your email"
              className="p-2 mt-1 w-full text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="review" className="font-semibold text-gray-700">
              Review
            </label>
            <textarea
              name="review"
              onChange={handleInputChange}
              value={formData.review}
              placeholder="Write your review..."
              className="p-2 mt-1 w-full text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="rating" className="font-semibold text-gray-700">
              Rating: {formData.rating}
            </label>
            <input
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="5"
              step="1"
              value={formData.rating}
              onChange={handleRatingChange}
              className="w-full mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
