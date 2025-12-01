import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="
          bg-white p-6 rounded-2xl shadow-lg border 
          flex items-center justify-center
        ">
          <Image
            src={data.images[0]}
            alt={data.title}
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="space-y-6">


          <h1 className="text-4xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {data.description}
          </p>

          <div>
            <p className="text-3xl font-bold text-emerald-600">
              ${data.price}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold">
              ⭐ {data.rating}
            </span>
          </div>

          <div className="text-gray-700 text-md font-medium">
            <span className="font-semibold text-gray-900">Brand:</span> {data.brand}
          </div>

          <div className="text-gray-700 text-md font-medium">
            <span className="font-semibold text-gray-900">Warranty:</span> {data.warrantyInformation}
          </div>

          <div className="text-gray-700 text-md font-medium">
            <span className="font-semibold text-gray-900">Minimum Order Qty:</span> {data.minimumOrderQuantity}
          </div>

          <div className="text-gray-700 text-md font-medium">
            <span className="font-semibold text-gray-900">Return Policy:</span> {data.returnPolicy}
          </div>

          <button
            className="
              mt-4 w-full md:w-56 bg-emerald-600 text-white py-3 rounded-xl 
              font-semibold shadow-md hover:bg-emerald-700 transition-all cursor-pointer
            "
          >
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default page;
