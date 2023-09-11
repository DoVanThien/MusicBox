import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalStyles from "../../../GlobalStyles";
import SecondButton from "./SecondButton";
import ModalSearch from "./ModalSearch";
import ModalOTP from "./ModalOTP";
import Progress from "./Progress";
import styles from "../../../styles/header.module.css";

const Header = () => {
  const [modalSearchIsOpen, setModalSearchIsOpen] = useState(false);
  const [modalOTPIsOpen, setModalOTPIsOpen] = useState(false);
  const navigate = useNavigate();

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
    navigate("/third");
    setModalOTPIsOpen(false);
  };

  return (
    <GlobalStyles>
      <div className={styles.header}>
        <p className="title">Đặt chỗ trực tuyến</p>
        <div style={{ width: "183px" }}>
          <SecondButton onClick={openSearchModal}>Tra cứu đặt chỗ</SecondButton>
        </div>
      </div>
      <Progress />
      <ModalSearch
        isOpen={modalSearchIsOpen}
        closeModal={closeSearchModal}
        openModal={openOTPModal}
      />
      <ModalOTP
        isOpen={modalOTPIsOpen}
        closeModal={closeOTPModal}
        navigate={navigateToThird}
      />
    </GlobalStyles>
  );
};

export default Header;
