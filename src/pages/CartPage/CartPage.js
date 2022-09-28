import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);
  const [total, setTotal] = useState('');
  // let price = cartItems.fitler((e) => {
  //     return e.price;
  // });
 let price;
  // console.log(price);

//   console.log(cartItems.fitler((e) => {
//     return e.price;
// }));

//   let price
//   cartItems.map((e) => {
//     price+=e.quantity*e.price;
//     return;
//   })
//  console.log(price);
cartItems.forEach(element => {
  price+=element.price+element.quantity
});
console.log(price);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="m-auto my-24 w-4/12 flex flex-col items-center gap-8">
          <h1 className="text-lg text-slate-900 font-semibold bg-slate-200 p-1 rounded-lg">
            YOUR SHOPPING CART IS EMPTY
          </h1>
          <p className="text-md text-slate-900 text-center font-light w-4/6">
            You still have nothing in your cart. Check out our large selection
            product and start shopping.
          </p>
          <button className="text-xl text-slate-800 text-center bg-orange-400 p-2 rounded-xl">
            <Link to="/">START SHOPPING</Link>
          </button>
        </div>
      ) : (
        <>
        <div className="flex flex-col justify-center items-center">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex mx-3 my-4 border-2 border-slate-700 rounded justify-start h-1/2 w-max"
            >
              <img src={product.imgUrl} alt="nesto" width={50} />
              <div className="flex ml-8 mt-3">
                <h2 className="font-bold">{product.name}</h2>
              </div>
              <div className="mx-10 flex justify-center my-3">
                <p className="text-bold">Amout:</p>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="rounded border-2 border-slate-700 h-auto px-1 text-center mx-3"
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="rounded border-2 border-slate-700 h-auto px-1 text-center mx-3"
                >
                  +
                </button>
              </div>
              <div className="mx-10 flex justify-center my-3">
                <p className="text-bold">One piece: {product.price} </p>
              </div>
              <div className="mx-10 flex justify-center my-3">
                Total Amout: {product.price * product.quantity}{" "}
                {product.currency}
              </div>
              <button onClick={() => removeFromCart(product.id)} className='border-2 border-slate-700 w-10 h-fit m-auto mx-4 bg-slate-700 text-fuchsia-50 rounded'>X</button>
            </div>
          ))}
        </div>
        <div className="bg-slate-700 fixed w-full h-auto bottom-0 flex justify-center">
            <h1 className="text-bold mr-8 text-fuchsia-50 text-2xl">Your Totall Is:</h1>
            <h1 className="text-fuchsia-50">nista</h1>
        </div>
        </>
      )}
    </>
  );
}