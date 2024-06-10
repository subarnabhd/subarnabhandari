import React from "react";

const Contactform = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="flex flex-col gap-5">
          <select
            id="countries"
           className="v-input"
          >
            <option value="" selected disabled>
              how can we help you?*
            </option>
            <option value="I need help with my vhandar order">
              I need help with my vhandar order
            </option>
            <option value="I want to partner with vhandar">
              I want to partner with vhandar
            </option>
            <option value="I found incorrect/ outdated information on a page">
              I found incorrect/ outdated information on a page
            </option>
            <option value="The website is not working the way it should">
              The website is not working the way it should
            </option>
            <option value="The app is not working the way it should">
              The app is not working the way it should
            </option>
            <option value="I would like to give feedback/ suggestions">
              I would like to give feedback/ suggestions
            </option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            id="name"
             className="v-input"
            placeholder="Your Good Name"
            required
          />

          <input
            type="email"
            id="email"
             className="v-input"
            placeholder="Email Address"
            required
          />
          <input
            type="tel"
            id="tel"
              className="v-input"
            placeholder="Phone Number"
            required
          />
          <textarea
            id="message"
            // rows="4"
             className="v-input"
            placeholder="Leave a comment..."
          ></textarea>
               <button
          type="submit"
          className="text-white bg-secondary-500 hover-bg-secondary-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Submit
        </button>
        </div>

   
      </form>
    </div>
  );
};

export default Contactform;
