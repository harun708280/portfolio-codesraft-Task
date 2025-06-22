import React from "react";

const DualTextEffect = ({
  largeText,
  smallText,
  largeTextColor = "text-[#bdacff18]", // Default translucent purple
  smallTextColor = "text-white", // Default white
  largeTextSize = "text-[100px]", // Default size for large text
  smallTextSize = "text-2xl", // Default size for small text
}) => {
  return (
    <div className="relative inline-block">
      {/* Large Background Text */}
      <h1
        className={`${largeTextSize} font-bold ${largeTextColor} dark:text-gray-600 uppercase px-2`}
      >
        {largeText}
      </h1>

      {/* Small Foreground Text */}
      <h1
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${smallTextSize} font-bold ${smallTextColor} dark:text-gray-200 tracking-wide`}
      >
        {smallText}
      </h1>
    </div>
  );
};

export default DualTextEffect;
