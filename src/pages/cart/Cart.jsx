import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextProvider } from "../../context/FoodContext";
import { data } from "../../data/Foodata";
import CartItem from "./CartItem";

const Cart = () => {
  const { Total, displayCart } = useContext(contextProvider);
  const isCartEmpty = Object.keys(displayCart).every(
    (key) => displayCart[key] === 0
  );

  return (
    <div>
      <h1 className="text-center text-3xl py-3">Your Cart Item</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((pro) => displayCart[pro.id] > 0 && <CartItem data={pro} />)}
      </div>
      {isCartEmpty ? (
        <p className="text-center">
          Your cart is empty!{" "}
          <Link to="/food" className="text-red-500">
            Go back to Shopping
          </Link>
        </p>
      ) : (
        <div className="my-8 flex justify-center border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4 px-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>$250</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>${Total}</dd>
              </div>
            </dl>

            <div className="flex justify-end px-4">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

           <div className="flex justify-end gap-5 items-center">
           <div className="flex justify-end">
              <Link
                to="/food"
                class="block rounded bg-deeperO px-5 py-3 text-sm text-gray-100 transition hover:bg-orange-400"
              >
                Shop
              </Link>
            </div>
            <div className="flex justify-end">
              <Link
                to="/"
                class="block rounded bg-deeperO px-5 py-3 text-sm text-gray-100 transition hover:bg-orange-400"
              >
                Checkout
              </Link>
            </div>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
