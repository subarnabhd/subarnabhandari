import Lottie from "lottie-react";
import loadingAnimation from "/public/lottie/rating.json";

export default function Custom404() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={loadingAnimation}
        style={{ width: "100%", maxWidth: "150px", height: "auto" }} // Responsive width with max width
        loop={true}
        autoplay={true}
        speed={1.5} // Speed up the animation
        direction={1}
        className="flex justify-center items-center"
      />
    </div>
  );
}
