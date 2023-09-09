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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "183px",
        height: "50px",
        borderRadius: "8px",
        border: "1px solid white",
        gap: "10px",
        background:
          "linear-gradient(rgba(121, 50, 237, 0.6), rgba(237, 50, 117, 0.6))",
      }}
    >
      {props.children}
    </button>
  );
}
