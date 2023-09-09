import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ThirdStep = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/order");
  };
  return (
    <div>
      <div>3</div>
      <Button onClick={handleSubmit}>Next</Button>
    </div>
  );
};

export default ThirdStep;
