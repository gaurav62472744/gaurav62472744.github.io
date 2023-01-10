import React from "react";

const LoadingScreen = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: "#202124" }}
    >
      <div>
        <img
          width="100%"
          src="https://cdn.dribbble.com/users/1299339/screenshots/11116681/media/79bf1ac602445860e4a44bcd4bf80704.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
