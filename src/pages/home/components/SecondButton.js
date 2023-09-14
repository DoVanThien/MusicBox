import React from "react";
import MediaQuery from "react-responsive";

export default function SecondButton(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MediaQuery minWidth={1224}>
        <button
          onClick={handleClick}
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #7932ed",
            backgroundColor: "#ffffff",
          }}
        >
          <p
            style={{
              color: "#7932ED",

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
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <button
          onClick={handleClick}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            border: "1px solid #7932ed",
            backgroundColor: "#ffffff",
          }}
        >
          <p
            style={{
              color: "#7932ED",

              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              margin: 0,
            }}
          >
            {props.children}
          </p>
        </button>
      </MediaQuery>
    </div>
  );
}
