import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export default function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <>
      <div className="flex w-full justify-center mt-5 h-1/5 flex-row bg-gray-100 ">
        <img
          className=" flex  w-7/12 h-1/5 "
          src="https://th.bing.com/th/id/OIP.HoYmNK9LK2rc2mUetSgcBAHaDP?w=350&h=153&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="slika"
        />
        <img
          className=" flex  w-3/12 h-1/5 border-4 border-cyan-400 "
          src="https://th.bing.com/th/id/OIP.3aOwtWG3J2um24yqyeyOXwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="slika"
        />
      </div>

      {/* <div className="flex items-center m-auto mt-10 justify-center border-4 w-1/6 h-12 border-sky-800 rounded-xl bg-sky-800  text-amber-50 ease-out duration-300 hover:bg-white hover:text-black ">
        <h3 className="font-serif text-xl font-extrabold">
          Najbolje u ponudi
        </h3>
      </div> */}
      <div className="flex justify-center items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            image={product.imgUrl}
            title={product.name}
            onClick={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}