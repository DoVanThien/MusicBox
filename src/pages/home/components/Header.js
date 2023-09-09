import React from "react";
import GlobalStyles from "../../../GlobalStyles";
import SecondButton from "./SecondButton";
import Progress from "./Progress";
import styles from "../../../styles/header.module.css";

const Header = () => {
  return (
    <GlobalStyles>
      <div className={styles.header}>
        <p className="title" style={{ margin: 0 }}>
          Đặt chỗ trực tuyến
        </p>
        <SecondButton>
          <p className="textLight" style={{ color: "#7932ED", margin: 0 }}>
            Tra cứu đặt chỗ
          </p>
        </SecondButton>
      </div>
      <Progress />
    </GlobalStyles>
  );
};

export default Header;
