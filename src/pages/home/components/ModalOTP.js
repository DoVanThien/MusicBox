import React from "react";
import Modal from "react-modal";
import MediaQuery from "react-responsive";
import { useLocation } from "react-router-dom";

import Button from "./Button";
import styles from "../../../styles/modalOTP.module.css";
import Icons from "../../../constants/Icons";

const customStylesDesktop = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: 460,
    height: 461,
    borderRadius: 8,
    background: "#fff",
  },
};

const customStylesMobile = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: 303,
    height: 364,
    borderRadius: 8,
    background: "#fff",
  },
};

export default function ModalOTP({
  isOpen,
  closeModal,
  navigate,
  matchedData,
  enteredPhone,
}) {
  return (
    <>
      <MediaQuery minWidth={1224}>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStylesDesktop}
        >
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <p className={styles.title}>Tra cứu thông tin đặt chỗ</p>
              <div>
                <p className={styles.text}>
                  Mã xác nhận đã được gửi đến số điện thoại:
                </p>
                <p className={styles.text}>{enteredPhone}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>
                  Mã xác nhận <span className={styles.star}>*</span>
                </p>
                <div className={styles.inputs}>
                  <input type="number" className={styles.input} />
                  <input type="number" className={styles.input} />
                  <input type="number" className={styles.input} />
                  <input type="number" className={styles.input} />
                </div>
              </div>
              <div className={styles.button}>
                <Button onClick={navigate}>Xác nhận</Button>
              </div>
              <p className={styles.text}>
                Nếu không nhận được mã, thử lại sau 20s
              </p>
              <div className={styles.cancel}>
                <img src={Icons.cancel} onClick={closeModal} alt="Icon" />
              </div>
            </div>
          </div>
        </Modal>
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStylesMobile}
        >
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <p className={styles.title}>Tra cứu thông tin đặt chỗ</p>
              <div className={styles.textField}>
                <div style={{ textAlign: "center" }}>
                  <p className={styles.text}>
                    Mã xác nhận đã được gửi đến số điện thoại:&nbsp;
                    <span className={styles.text}>{enteredPhone}</span>
                  </p>
                </div>
                <div className={styles.field}>
                  <p className={styles.label}>
                    Mã xác nhận <span className={styles.star}>*</span>
                  </p>
                  <div className={styles.inputs}>
                    <input type="number" className={styles.input} />
                    <input type="number" className={styles.input} />
                    <input type="number" className={styles.input} />
                    <input type="number" className={styles.input} />
                  </div>
                </div>
              </div>

              <div className={styles.button}>
                <Button onClick={navigate}>Xác nhận</Button>
              </div>
              <p className={styles.text}>
                Nếu không nhận được mã, thử lại sau 20s
              </p>
              <div className={styles.cancel}>
                <img src={Icons.cancel} onClick={closeModal} alt="Icon" />
              </div>
            </div>
          </div>
        </Modal>
      </MediaQuery>
    </>
  );
}
