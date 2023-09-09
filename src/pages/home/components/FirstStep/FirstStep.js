import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import GlobalStyles from "../../../../GlobalStyles";
import { FormAddress } from "./FormAddress";
import { FormRoom } from "./FormRoom";
import FormDate from "./FormDate";
import { FormTime } from "./FormTime";
import styles from "../../../../styles/fisrtStep.module.css";
import Colors from "../../../../constants/Colors";

const FirstStep = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/second");
  };

  return (
    <GlobalStyles>
      <div className={styles.container}>
        <div className={styles.forms}>
          <div className={styles.form}>
            <FormAddress />
            <FormRoom />
          </div>
          <div className={styles.form}>
            <FormDate />
            <FormTime />
          </div>
        </div>

        <div className={styles.containerButton}>
          <Button onClick={handleSubmit}>
            <p
              className="textLight"
              style={{ color: `${Colors.grayButton}`, margin: 0 }}
            >
              Tìm kiếm
            </p>
          </Button>
        </div>
      </div>
    </GlobalStyles>
  );
};

export default FirstStep;
