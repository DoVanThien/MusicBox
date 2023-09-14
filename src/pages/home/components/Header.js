import React, { useState } from "react";
import MediaQuery from "react-responsive";

import ModalSearch from "./ModalSearch";
import ModalOTP from "./ModalOTP";
import { useNavigate } from "react-router-dom";
import Progress from "./Progress";
import SecondButton from "./SecondButton";
import GlobalStyles from "../../../GlobalStyles";
import styles from "../../../styles/header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const [modalSearchIsOpen, setModalSearchIsOpen] = useState(false);
  const [modalOTPIsOpen, setModalOTPIsOpen] = useState(false);
  const [matchedData, setMatchedData] = useState(null);
  const [enteredPhone, setEnteredPhone] = useState("");

  const handlePhoneChange = (value) => {
    setEnteredPhone(value);
  };

  const openSearchModal = () => {
    setModalSearchIsOpen(true);
  };

  const closeSearchModal = () => {
    setModalSearchIsOpen(false);
  };

  const openOTPModal = () => {
    setModalSearchIsOpen(false);
    setModalOTPIsOpen(true);
  };

  const closeOTPModal = () => {
    setModalOTPIsOpen(false);
  };

  const navigateToThird = () => {
    navigate("/order", { state: { matchedData } });
    setModalOTPIsOpen(false);
  };

  const onMatchFound = (data) => {
    setMatchedData(data);
    console.log("header", data);
  };

  return (
    <GlobalStyles>
      <MediaQuery minWidth={1224}>
        <div className={styles.header}>
          <p className="title">Đặt chỗ trực tuyến</p>
          <div style={{ width: "183px" }}>
            <SecondButton onClick={openSearchModal}>
              Tra cứu đặt chỗ
            </SecondButton>
          </div>
        </div>
        <Progress />
        <ModalSearch
          isOpen={modalSearchIsOpen}
          closeModal={closeSearchModal}
          openModal={openOTPModal}
          onMatchFound={onMatchFound}
          enteredPhone={enteredPhone}
          onPhoneChange={handlePhoneChange}
        />
        <ModalOTP
          isOpen={modalOTPIsOpen}
          closeModal={closeOTPModal}
          navigate={navigateToThird}
          matchedData={matchedData}
          enteredPhone={enteredPhone}
        />
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <div className={styles.header}>
          <div className={styles.imageButton}>
            <img
              src={require("../../../assets/music.png")}
              alt="musicbox"
              width="44%"
            />
            <div style={{ width: "137px", height: "36px" }}>
              <SecondButton onClick={openSearchModal}>
                Tra cứu đặt chỗ
              </SecondButton>
            </div>
          </div>

          <div className={styles.titleProgress}>
            <p className="title">Đặt chỗ trực tuyến</p>
            <Progress />
          </div>
        </div>

        <ModalSearch
          isOpen={modalSearchIsOpen}
          closeModal={closeSearchModal}
          openModal={openOTPModal}
          onMatchFound={onMatchFound}
          enteredPhone={enteredPhone}
          onPhoneChange={handlePhoneChange}
        />
        <ModalOTP
          isOpen={modalOTPIsOpen}
          closeModal={closeOTPModal}
          navigate={navigateToThird}
          matchedData={matchedData}
          enteredPhone={enteredPhone}
        />
      </MediaQuery>
    </GlobalStyles>
  );
};

export default Header;
