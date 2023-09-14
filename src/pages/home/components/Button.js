import React from "react";
import MediaQuery from "react-responsive";

export default function Button(props) {
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
            border: "1px solid white",
            background: "linear-gradient(96deg, #7932ED 0.99%, #ED3275 100%)",
            transition: "background 0.5s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(96deg, #ED3275 0.99%, #7932ED 100%)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(96deg, #7932ED 0.99%, #ED3275 100%)";
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
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <button
          onClick={handleClick}
          style={{
            width: "100%",
            height: "44px",
            borderRadius: "8px",
            border: "1px solid white",
            background: "linear-gradient(96deg, #7932ED 0.99%, #ED3275 100%)",
            transition: "background 0.5s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(96deg, #ED3275 0.99%, #7932ED 100%)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(96deg, #7932ED 0.99%, #ED3275 100%)";
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
      </MediaQuery>
    </div>
  );
}
