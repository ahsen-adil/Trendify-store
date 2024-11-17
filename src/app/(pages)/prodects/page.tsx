import Image from "next/image";
import Link from "next/link";
import React from "react";

const Prodects: React.FC = () => {
  const products = [
    {
      id: 1,
      image: "https://img.drz.lazcdn.com/g/kf/S86ef6da8d3184ae8ad7524ed3ce6046fG.jpg_200x200q80.jpg_.webp",
      name: "3 pc women's stitched crinkle chiffon embroidered suit",
      price: "$120",
      rating: "4.5/5",
    },
    {
      id: 2,
      image: "https://img.drz.lazcdn.com/g/kf/S0e3f23b8fb08406c8a9b015538ba802ad.jpg_200x200q80.jpg_.webp",
      name: "3 pcs women's stitched fancy organza embroidered suit",
      price: "$240",
      originalPrice: "$260",
      discount: "-20%",
      rating: "3.5/5",
    },
    {
      id: 3,
      image: "https://img.drz.lazcdn.com/g/kf/S954fb611ca3d4662b2a7178dc3286d9eC.jpg_200x200q80.jpg_.webp",
      name: "Round Neck T-Shirt1pcs Black Ultralight Men",
      price: "$180",
      rating: "4.5/5",
    },
    {
      id: 4,
      image: "https://img.drz.lazcdn.com/static/pk/p/3b4c9bba1c0efd140922613c3c2240c9.jpg_200x200q80.jpg_.webp",
      name: "Workout Tank top gym shirts for men",
      price: "$130",
      originalPrice: "$160",
      discount: "-30%",
      rating: "4.5/5",
    },
  ];
  

  return (
    <div className="bg-[#FFCFB3] min-h-screen py-12 px-4 md:px-12 font-sans" >
      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold mb-12 uppercase">New & Noteworthy</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center"
          >
            {/* Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-64 object-cover"
              data-aos="flip-right" data-aos-duration="2000"
            />

            {/* Details */}
            <div className="p-4">
              {/* Product Name */}
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>

              {/* Rating */}
              <div className="flex justify-center items-center text-yellow-500 text-sm mb-2">
                {"★".repeat(parseInt(product.rating))}
                {"☆".repeat(5 - parseInt(product.rating))}
                <span className="ml-2 text-gray-500">{product.rating}</span>
              </div>

              {/* Prices */}
              <div className="mb-2">
                <span className="text-lg font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-sm line-through ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Discount */}
              {product.discount && (
                <span className="text-sm text-red-500 font-semibold">
                  {product.discount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
       <Link href="/allProdects"> <button className="px-8 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-300">
          View All
        </button></Link>
      </div>
    </div>
  );
};

export default Prodects;
