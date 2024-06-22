"use client";
import { useState } from "react";
import Contactform from "./Contactform";
import Link from "next/link";

const Contacttab = () => {
  const [activeTab, setActiveTab] = useState("message");

  return (
    <div className="cont-tab">
      <div className="tabHeaders">
        <button
          className={`tabButton ${activeTab === "message" ? "active" : ""}`}
          onClick={() => setActiveTab("message")}
        >
          Message
        </button>
        <button
          className={`tabButton ${activeTab === "schedule" ? "active" : ""}`}
          onClick={() => setActiveTab("schedule")}
        >
          Schedule a Call
        </button>
      </div>
      <div className="tabContent">
        {activeTab === "message" && (
          <div>
            <Contactform />
          </div>
        )}
        {activeTab === "schedule" && (
          <div className="flex flex-col gap-1 ">
            <h2 className="text-black font-semibold text-lg ">Project discussion call</h2>
            <p className="color-black80 text-normal">A Walk through our work process and explain how we can help !</p>
            <Link className="btn primary-btn w-max mt-5" href="https://calendly.com/subarnabhd" target="blank">Schedule my date and time{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacttab;
