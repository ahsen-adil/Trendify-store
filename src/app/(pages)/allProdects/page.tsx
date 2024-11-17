import Image from "next/image";
import React from "react";

const AllProdects: React.FC = () => {
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
    {
      id: 5,
      image: "https://img.drz.lazcdn.com/static/pk/p/41749b88f90e758ea0ce5f01aa38f0d2.jpg_200x200q80.jpg_.webp",
      name: "New export quality GREAT WAR PRINT HOODIE by EXTRATION",
      price: "$150",
      rating: "4.7/5",
    },
    {
      id: 6,
      image: "https://img.drz.lazcdn.com/g/kf/Sb47fba3fe03049ddb3dcc0ce8343c2d8I.jpg_200x200q80.jpg_.webp",
      name: "Original Indian Zircon Gold Plated Adjustable Balls Heart Pendant Jewelry Set",
      price: "$80",
      rating: "4.3/5",
    },
    {
      id: 7,
      image: "https://img.drz.lazcdn.com/g/kf/S259f1e069f0b46d69ae6a52d4d27109fW.jpg_200x200q80.jpg_.webp",
      name: "2024 Vintage pu leather shoulder bag for women luxury crossbody bag fashion. with 2 straps",
      price: "$90",
      rating: "4.6/5",
    },
    {
      id: 8,
      image: "https://img.drz.lazcdn.com/static/pk/p/826f3c2e1207fca36ff6b90ab3a51fea.jpg_200x200q80.jpg_.webp",
      name: "Winter Gloves Leather Gloves Black Leather Biker Gloves for Men Motorbike winter gloves",
      price: "$45",
      rating: "4.8/5",
    },
    {
      id: 9,
      image: "https://img.drz.lazcdn.com/static/pk/p/3225d3f4c16075abcef41e42dc5d9fa4.jpg_200x200q80.jpg_.webp",
      name: "Your Precisely Night Dress of satin silk Gown nighty for girls New Fashionable Ladies Long Gown Night Suit Ladies Night Suit Black/Maroon/Purple Color",
      price: "$250",
      rating: "4.9/5",
    },
    {
      id: 10,
      image: "https://img.drz.lazcdn.com/static/pk/p/b90600d3f784f983f1848609595028cb.jpg_200x200q80.jpg_.webp",
      name: "High Quality Traditional Wool Shawl For Men Dussa | In Black, White,Brown.",
      price: "$40",
      rating: "4.2/5",
    },
    {
        id: 11,
        image: "https://img.drz.lazcdn.com/static/pk/p/de3f885418434fcdeb91aa0fce040902.jpg_200x200q80.jpg_.webp",
        name: "Stylish Silk Embraided Stitched Flower Gown 3pc for Women and Young Girls Trendy Outfit",
        price: "$240",
        originalPrice: "$260",
        discount: "-20%",
        rating: "3.5/5",
      },
      {
        id: 12,
        image: "https://img.drz.lazcdn.com/static/pk/p/6ae598ef18503f601bd30d7456887577.jpg_200x200q75.jpg_.webp",
        name: "The Vintage Clothing Pack of 5 basic premium full sleeves T shirts",
        price: "$180",
        rating: "4.5/5",
      },
  ];
  

  return (
    <div className="bg-[#FFCFB3] min-h-screen py-12 px-4 md:px-12 font-sans">
      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold mb-12 uppercase">New & Noteworthy</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
};

export default AllProdects
