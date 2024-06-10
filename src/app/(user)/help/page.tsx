import React from "react";

const page = () => {
  return (
    <main>
      <div className="help-box-title text-white  text-center p-20 flex flex-col gap-5 bg-primary-900">
        <h1 className="font-bold text-5xl">We're here to help.</h1>
        <p className="color-neutral-5">
          Have an issue with an order or feedback for us? Our support team is
          here to help you from 6 am to 3 am.
        </p>
      </div>

      <div className="container m-auto gap-4 flex  p-20 color-neutral-8 justify-between">
        <div className="py-4 flex flex-col  gap-4">
          <h2 className="text-xl font-bold">Order Related Queries</h2>
          <p>
            Connect with customer support on the app or chat us on{" "}
            <a
              className="v-link"
              target="blank"
              href="https://wa.me/9779851357358"
            >
              Whatsapp
            </a>
          </p>
        </div>
        <div className="py-4 flex flex-col  gap-4">
          <h2 className="text-xl font-bold">For Anything Else</h2>
          <p>
            Send us an email to{" "}
            <a
              className="v-link"
              target="blank"
              href="mailto:support@vhandar.com"
            >
              support@vhandar.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
