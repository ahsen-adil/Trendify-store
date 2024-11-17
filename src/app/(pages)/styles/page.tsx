import Image from "next/image";
import React from "react";

const DressStyle: React.FC = () => {
  const styles = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1919717633/photo/asian-woman-entrepreneurs-enjoying-coffee-and-reading-a-book-in-a-relaxed-atmosphere-at-a-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mRKHG3ogTLLgFByMAF0tMMLhP197vwNT2bHVg8w4LE=", // Replace with your image paths
      label: "Casual",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1080910832/photo/young-stylish-businessman-having-takeaway-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=LRajFa8WO2AjgvI1h7jbbnYB5GOj01FUZKJPZjpF6Ys=", // Replace with your image paths
      label: "Formal",
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1343283711/photo/a-young-group-of-joyful-friends-celebrating-at-a-birthday-party-together-friends-cheering-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=2gvbUOb6XCW1acO_fnbk0ULaZI1mDVrp0MYRIO9OVGw=", // Replace with your image paths
      label: "Party",
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/1616732658/photo/man-doing-a-weight-training-exercise.jpg?s=612x612&w=0&k=20&c=MIFaUqsYakAjNhIHVbND7BTRgW_K6Vry7FjLJcFUBOo=", // Replace with your image paths
      label: "Gym",
    },
  ];

  return (
    <div className="bg-[#FFCFB3] py-12 px-4 md:px-12 font-sans">
      {/* Title */}
      <h2 className="uppercase text-center text-4xl font-extrabold mb-12">
      Discover Your Style
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" data-aos="zoom-in-up" data-aos-duration="2000">
        {styles.map((style) => (
          <div
            key={style.id}
            className="relative bg-[#fef6e0] rounded-lg overflow-hidden shadow-md"
          >
            {/* Image */}
            <Image
              src={style.image}
              alt={style.label}
              width={500}
              height={500}
              className="w-full h-[200px] object-cover"
            />

            {/* Label */}
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-xl font-semibold bg-white px-3 py-1 rounded-md">
                {style.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressStyle;