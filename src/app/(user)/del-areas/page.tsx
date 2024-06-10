import React from "react";

const page = () => {
  return (
    <main>
      <div className="text-white bg-primary-300 ">
        <div className="container text-center p-20 flex flex-col gap-5 m-auto">
          <h1 className="font-bold text-5xl">Advertise on Vhandar</h1>
          <p className="color-neutral-3">
            Vhandar offers groceries delivery services in following areas at the
            moment. We will continue expanding our service areas regularly.
            Please check this page later if your area is not available already.
          </p>
        </div>
      </div>
      <div>
        <div className=" text-black">
          <div className="container m-auto flex py-20 gap-10">

            <div className="delivery-card p-10 border rounded-lg w-1/3 ">
              <h2 className="text-3xl font-bold mb-3">Kathmandu</h2>
              <li>Shankamul</li>
              <li>New Baneshwor</li>
              <li>Old Baneshwor</li>
              <li>Buddhanagar</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
            </div>

            <div className="delivery-card p-10 border rounded-lg w-1/3">
              <h2 className="text-3xl font-bold mb-3">Lalitpur</h2>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
            </div>

            <div className="delivery-card p-10 border rounded-lg w-1/3">
              <h2 className="text-3xl font-bold mb-3">Bhaktapur</h2>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
              <li>Shankamul</li>
            </div>


          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
