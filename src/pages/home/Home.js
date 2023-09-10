import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstStep from "./components/FirstStep/FirstStep";
import Header from "../home/components/Header";
import SecondStep from "../home/components/SecondStep/SecondStep";
import ThirdStep from "../home/components/ThirdStep/ThirdStep";
import GlobalStyles from "../../GlobalStyles";

import styles from "../../styles/home.module.css";
import { text1, text2 } from "../../constants/Texts";
import Icons from "../../constants/Icons";

const Home = () => {
  return (
    <GlobalStyles>
      <div className={styles.home}>
        {/* leftSide */}
        <div className={styles.leftSide}>
          <div className={styles.musicBox}>
            <div className={styles.musicBoxInfo}>
              <img
                src={require("../../assets/music.png")}
                alt="musicbox"
                className={styles.musicBoxImage}
              />
              <div className={styles.musicBoxDes}>
                <p className="textLight">{text1}</p>
                <p className="textLight">{text2}</p>
              </div>
            </div>

            <div className={styles.musicBoxContact}>
              <p className="subTitleLight">HỖ TRỢ ĐẶT BÀN</p>
              <div className={styles.infoBox}>
                <div className={styles.infoBoxIcon}>
                  <img src={Icons.call} alt="icon" />
                  <p className="textLight">096 152 1312</p>
                </div>
                <div className={styles.infoBoxIcon}>
                  <img src={Icons.mail} alt="icon" />
                  <p className="textLight">muzicboxes@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.container}>
            <Header />
            <Routes>
              <Route path="/" element={<FirstStep />} />
              <Route path="/second" element={<SecondStep />} />
              <Route path="/third" element={<ThirdStep />} />
            </Routes>
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={Icons.zalo} />
            <img src={Icons.mess} />
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
};

export default Home;
