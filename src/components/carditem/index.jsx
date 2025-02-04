import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { TbShoppingBagPlus } from "react-icons/tb";
// "title": "ЧАЙНИК НАСТОЛЬНЫЙ",
// "capacity": "0.8 литра",
// "sale": "Эконом вариант",
// "product_name": "Galaxy GL0305",
// "rating": 4.4,
// "reviews_count": 60,
// "installment_price": 75000,
// "total_price": 900000,
// "wishlist": false
const Card = ({
  title,
  capacity,
  sale,
  product_name,
  rating,
  reviews_count,
  installment_price,
  total_price,
  img,
}) => {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div>
      <div className="relative w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        {/* Product Image */}
        <div className="relative">
          <span className="bg-yellow-400 absolute bottom-2 left-2 text-black text-xs font-bold px-2 py-1 rounded-lg">
            {sale}
          </span>
          <img src={img} alt="Product" className="w-full h-56 object-cover" />
          {/* Wishlist Icon */}

          {wishlist ? (
            <FcLike
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-3 right-3   text-3xl  bg-transparent   transition"
            />
          ) : (
            <FcLikePlaceholder
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-3 right-3   text-3xl  bg-transparent   transition"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="mt-2 text-lg font-semibold leading-tight">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            ⭐ {rating} <span className="ml-1">({reviews_count} отзыва)</span>
          </div>

          {/* Price Section */}
          <div className="mt-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold">{total_price}</p>
              <p className="text-sm text-gray-500">
                В рассрочку:{" "}
                <span className="text-black font-semibold">
                  {installment_price} сум/мес
                </span>
              </p>
            </div>
            <TbShoppingBagPlus className=" text-3xl" />
          </div>

          {/* Buy Button */}
        </div>
      </div>
    </div>
  );
};

export default Card;
