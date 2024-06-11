import React from "react";

const Aboutstudio = () => {
    return (
        <div className="bg-black py-20">
            <div className="container m-auto flex items-center justify-between">
                <div className="flex   flex-col ">
                    <h1 className="text-base font-base">The Subarna</h1>
                    <h1 className="text-5xl font-bold py-2">
                        Studio<b>.</b>
                    </h1>
                    <span className="col1-right">TSS : #tss #thesubarnastudio</span>
                </div>
                <div className="flex flex-col">

                    <p className="text-xl">
                        DESIGN<b>.</b>SIMPLIFIED<b>.</b>
                    </p>
                    <h1 className="text-5xl font-bold py-4">About Us</h1>
                    <div className="color-white90">
                    <p className="s-text">
                        We call ourselves the innovative &amp; problem-solving firm that
                        gets your business to the next level.
                    </p>
                    <p>
                        THE TALE OF TSS We create experiences based on UX best practices,
                        market research, branding.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutstudio;
