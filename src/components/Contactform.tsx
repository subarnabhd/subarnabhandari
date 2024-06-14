import React from "react";

const Contactform = () => {
  return (
    <form className="justify-start max-w-md  flex flex-col gap-3">
        <div>
          <label className="s-label">Your Name</label>
          <input
            type="text"
            id="name"
            className="s-input"
            placeholder="Your Good Name"
            required
          />
        </div>
        <div>
          <label className="s-label">Email Address</label>

          <input
            type="email"
            id="email"
            className="s-input"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label className="s-label">Phone Number</label>

          <input
            type="tel"
            id="tel"
            className="s-input"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label className="s-label">What services are you looking for?</label>

          <select id="countries" className="s-input">
            <option value="" selected disabled>
              What services are you looking for?
            </option>
            <option value="UX Design">UX Design</option>
            <option value="Development">Development</option>
            <option value="Branding">Branding</option>
            <option value="Branding">SEO</option>
            <option value="Motion Design">Motion Design</option>
            <option value="Wordpress">Wordpress</option>
            <option value="Consulting">Consulting</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label className="s-label">Tell us in Brief</label>
          <textarea
            id="message"
            // rows="4"
            className="s-input"
            placeholder="Message / Project Details"
          ></textarea>
        </div>
        <button type="submit" className="text-white primary-btn uppercase">
          Submit
        </button>
    </form>
  );
};

export default Contactform;
