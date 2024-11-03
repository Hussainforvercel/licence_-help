import React from "react";

type Review = {
  name: string;
  image: string;
  rating: number;
  review: string;
};

const CustomerReviews: React.FC = () => {
  // Sample data for each review
  const reviews: Review[] = [
    {
      name: "Adriana",
      image: "/Adriana_Image-38620ede6c913de00c27e1eb92d22afa.jpg.png", // Replace with actual image path
      rating: 5,
      review:
        "Adriana is a really good instructor! She knows everything and she always makes sure to correct every detail before the test. Apart from that, she is very sweet and calm. I was blessed to find her. Thanks Adriana!!!!",
    },
    {
      name: "Sam",
      image: "/Adriana_Image-38620ede6c913de00c27e1eb92d22afa.jpg.png", // Replace with actual image path
      rating: 5,
      review:
        "Excellent Instructor. I saw the biggest smile on my daughter’s face when she returned from her lesson. Sam is calm, patient, understanding, and very helpful!",
    },
    {
      name: "John",
      image: "/Adriana_Image-38620ede6c913de00c27e1eb92d22afa.jpg.png", // Replace with actual image path
      rating: 5,
      review:
        "John is a top-class driving instructor. He was very informative about the need to know building blocks of driving a manual car, breaking down the skills of adjusting seating.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 mx-20 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Customers Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 relative flex flex-col items-start text-center"
          >
            {/* Arrow Icon Positioned on the Top Right Corner */}
            <img
              src="/grouparrow.png" // Replace with actual path to arrow image
              alt="Arrow icon"
              className="w-5 h-5 absolute -top-2 right-10"
            />

            {/* Profile Image */}
            <img
              src={review.image}
              alt={`${review.name}'s picture`}
              className="w-16 h-16 rounded-full absolute -top-8 border-4 border-white"
            />
            <div className="mt-8">
              <h3 className="font-semibold text-left text-lg">{review.name}</h3>
              <div className="flex justify-start mt-1 mb-4">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ⭐
                    </span>
                  ))}
              </div>
              <p className="text-gray-700">“{review.review}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
