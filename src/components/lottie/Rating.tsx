import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Rating() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lottie/rating.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation data:", error));
  }, []);

  if (!animationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        style={{ width: "100%", maxWidth: "150px", height: "auto" }}
        loop={true}
        autoplay={true}
        className="flex justify-center items-center"
      />
    </div>
  );
}
