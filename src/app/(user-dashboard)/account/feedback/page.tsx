import React from "react";

const page = () => {
  return (
    <div >
      <div className="acc-head">
        <h1 className="acc-title">Feedback</h1>
      </div>

      <form className="flex flex-col p-5 gap-4">
        <div>
          <h2 className="text-lg font-semibold color-neutral-11">
            How can we help you better?
          </h2>
          <p className="text-sm font-base color-neutral-7">
            If you have any suggestions regarding Vhandar, let us know in
            the field below.
          </p>
        </div>
        <textarea
          id="feedback"
          className="v-input  min-h-[100px]"
          placeholder="Write your feedback message here..."
          required
        />
        <button type="submit" className="btn primary-btn-sm ">
          Send Feedback
        </button>

        <p className="color-neutral-7 text-xs text-center">
          Your review and feedback will help users to improve our user
          experience
        </p>
      </form>
    </div>
  );
};

export default page;
