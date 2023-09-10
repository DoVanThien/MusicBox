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
        <div style={{ width: "183px" }}>
          <SecondButton>Tra cứu đặt chỗ</SecondButton>
        </div>
      </div>
      <Progress />
    </GlobalStyles>
  );
};

export default Header;
