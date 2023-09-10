import React from "react";

export default function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button
      onClick={handleClick}
      style={{
        width: "100%",
        height: "50px",
        borderRadius: "8px",
        border: "1px solid white",
        background:
          "linear-gradient(rgba(121, 50, 237, 0.6), rgba(237, 50, 117, 0.6))",
      }}
    >
      <p
        style={{
          color: "#F5F5F5",

          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "26px",
          margin: 0,
        }}
      >
        {props.children}
      </p>
    </button>
  );
}
