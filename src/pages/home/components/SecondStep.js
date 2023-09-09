import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SecondStep = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/third");
  };
  return (
    <div>
      <div>2</div>
      <Button onClick={handleSubmit}>Next</Button>
    </div>
  );
};

export default SecondStep;
