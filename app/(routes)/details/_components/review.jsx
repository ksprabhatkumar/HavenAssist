import React from "react";

// Component to render stars based on rating
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927C9.349 2.09 10.652 2.09 10.951 2.927l1.201 3.73a1 1 0 00.95.691h3.878c1.06 0 1.502 1.35.725 1.988l-3.136 2.517a1 1 0 00-.347 1.118l1.2 3.729c.299.836-.756 1.526-1.518 1.014L10 13.611l-3.104 2.413c-.762.512-1.817-.178-1.518-1.014l1.2-3.729a1 1 0 00-.347-1.118L3.095 9.336c-.777-.638-.335-1.988.725-1.988h3.878a1 1 0 00.95-.691l1.201-3.73z" />
        </svg>
      ))}
    </div>
  );
};

// Review component
const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "vikas",
      rating: 4,
      comment: "Great service, very professional and friendly!",
    },
    {
      id: 2,
      name: "parth",
      rating: 5,
      comment: "Amazing experience, highly recommend!",
    },
    {
      id: 4,
      name: "ayush",
      rating: 3,
      comment: "Good service but could be improved in some areas.",
    },
    {
      id: 5,
      name: "anish",
      rating: 4,
      comment: "Great service, very professional and friendly!",
    },
    {
      id: 6,
      name: "lovkesh",
      rating: 5,
      comment: "Amazing experience, highly recommend!",
    },
    {
      id: 7,
      name: "sandeep",
      rating: 3,
      comment: "Good service but could be improved in some areas.",
    },
    {
      id: 8,
      name: "rohan",
      rating: 4,
      comment: "Great service, very professional and friendly!",
    },
    {
      id:  19,
      name: "ajay",
      rating: 5,
      comment: "Amazing experience, highly recommend!",
    },
    {
      id: 10,
      name: "priyanshu",
      rating: 3,
      comment: "Good service but could be improved in some areas.",
    },
    {
      id: 30,
      name: "piyush",
      rating: 3,
      comment: "Good service but could be improved in some areas.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Customer Reviews
      </h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-300 dark:border-gray-600 pb-4 mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {review.name}
            </h3>
            <StarRating rating={review.rating} />
          </div>
          <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
