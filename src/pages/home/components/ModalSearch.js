import React, { useState } from "react";
import Modal from "react-modal";
import MediaQuery from "react-responsive";

import { useStorage } from "../../../storage/StorageContext";
import Button from "./Button";
import styles from "../../../styles/modalSearch.module.css";
import Icons from "../../../constants/Icons";

const customStyleDesktop = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: 408,
    height: 291,
    borderRadius: 8,
    background: "#fff",
  },
};

const customStyleMobile = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: 303,
    height: 250,
    borderRadius: 8,
    background: "#fff",
  },
};

export default function ModalSearch({
  isOpen,
  closeModal,
  openModal,
  onMatchFound,
  enteredPhone,
  onPhoneChange,
}) {
  // const [enteredPhone, setEnteredPhone] = useState("");
  const { storage } = useStorage();

  const handlePhoneSearch = () => {
    let matchedData = null;

    for (const phone in storage) {
      if (storage[phone].clientPhone === enteredPhone) {
        matchedData = storage[phone];
        break;
      }
    }

    if (matchedData) {
      onMatchFound(matchedData);
      openModal();
    }
  };

  const handlePhoneInputChange = (e) => {
    const value = e.target.value;
    onPhoneChange(value);
  };

  return (
    <>
      <MediaQuery minWidth={1224}>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyleDesktop}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              <p className={styles.title}>Tra cứu thông tin đặt chỗ</p>
              <div className={styles.field}>
                <p className={styles.phone}>
                  Số điện thoại <span className={styles.star}>*</span>
                </p>
                <input
                  type="number"
                  placeholder="Nhập số điện thoại đặt bàn"
                  className={styles.input}
                  value={enteredPhone}
                  onChange={handlePhoneInputChange}
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button onClick={handlePhoneSearch}>Xác nhận</Button>
            </div>
            <div className={styles.cancel}>
              <img src={Icons.cancel} alt="Cancel" onClick={closeModal} />
            </div>
          </div>
        </Modal>
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyleMobile}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              <p className={styles.title}>Tra cứu thông tin đặt chỗ</p>
              <div className={styles.field}>
                <p className={styles.phone}>
                  Số điện thoại <span className={styles.star}>*</span>
                </p>
                <input
                  type="number"
                  placeholder="Nhập số điện thoại đặt bàn"
                  className={styles.input}
                  value={enteredPhone}
                  onChange={handlePhoneInputChange}
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button onClick={handlePhoneSearch}>Xác nhận</Button>
            </div>
            <div className={styles.cancel}>
              <img src={Icons.cancel} alt="Cancel" onClick={closeModal} />
            </div>
          </div>
        </Modal>
      </MediaQuery>
    </>
  );
}
