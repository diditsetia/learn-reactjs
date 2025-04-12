import React from "react";

const buttonPrimary = ({
  textColor = "#fff",
  textLabel = "Label",
  height = 40,
  width = 125,
  backgroundColor = "#000",
  size = 14,
  radius = 25,
  click = () => {}
}) => {
  return (
    <div
      style={{
        borderRadius: radius,
        background: backgroundColor,
        // padding: "8px  29px",
        // textAlign: "center",
        height: height,
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={click}
    >
      <span
        style={{ color: textColor, fontSize: size }}
        className="HammersmithOne"
      >
        {textLabel}
      </span>
    </div>
  );
};

export default buttonPrimary;
