import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <div className="bg-neutral-3 border-b p-5">
        <div className="container m-auto py-20 flex justify-center flex-col columns-md gap-2">
          <h3 className="text-xl font-medium color-neutral-9 py-1">
            #1 instant delivery service in Nepal
          </h3>
          <p className="text-m color-neutral-7 py-1">
            Shop on the go and get anything delivered in minutes. Buy everything
            from groceries to fresh fruits & vegetables, cakes and bakery items,
            to meats & seafood, cosmetics, mobiles & accessories, electronics,
            baby care products and much more. We get it delivered at your
            doorstep in the fastest and the safest way possible.
          </p>

          <h3 className="text-xl font-medium color-neutral-9">
            single app for all your daily needs
          </h3>
          <p className="text-m color-neutral-7 py-1">
            Order thousands of products at just a tap - milk, eggs, bread,
            cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices,
            chocolates, chips, biscuits, Maggi, cold drinks, shampoos, soaps,
            body wash, pet food, diapers, electronics, other organic and gourmet
            products from your neighbourhood stores and a lot more.
          </p>

          <h3 className="text-xl font-medium color-neutral-9">
            order online on Vhandar to enjoy instant delivery magic
          </h3>
          <p className="text-m color-neutral-7 py-1">
            Cities we currently serve: Kathamndu: Shankamul, Koteshwor, New
            Baneshwor
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
