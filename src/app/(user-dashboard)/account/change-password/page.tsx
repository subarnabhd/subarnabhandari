import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="acc-head">
        <h2 className="acc-title">Change Password</h2>
      </div>

      <form className="flex flex-col gap-5 p-5">
        <div>
          <label className="v-label">Current Password</label>

          <input
            type="text"
            id="name"
            className="v-input"
            placeholder="Enter your current password"
            required
          />
        </div>
        <div>
          <label className="v-label">New Password</label>

          <input
            type="text"
            id="name"
            className="v-input"
            placeholder="Enter your new password"
            required
          />
        </div>
        <div>
          <label className="v-label">Confirm New Password</label>

          <input
            type="text"
            id="name"
            className="v-input"
            placeholder="Confirm your new password"
            required
          />
        </div>

        <div>
          <button type="submit" className="btn primary-btn-sm ">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
