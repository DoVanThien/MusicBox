import React from "react";

export default function SecondButton(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button
      onClick={handleClick}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "183px",
        height: "50px",
        borderRadius: "8px",
        border: "1px solid #7932ed",
        // padding: "12px 24px",
        gap: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      {props.children}
    </button>
  );
}
