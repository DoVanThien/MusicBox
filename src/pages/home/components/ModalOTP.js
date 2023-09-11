import React from "react";
import Modal from "react-modal";
import Button from "./Button";

import styles from "../../../styles/modalOTP.module.css";
import Icons from "../../../constants/Icons";

const customStyles = {
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

export default function ModalOTP({ isOpen, closeModal, navigate }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <p className={styles.title}>Tra cứu thông tin đặt chỗ</p>
          <div>
            <p className={styles.text}>
              Mã xác nhận đã được gửi đến số điện thoại:
            </p>
            <p className={styles.text}>123</p>
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

          <p className={styles.text}>Nếu không nhận được mã, thử lại sau 20s</p>

          <div className={styles.cancel}>
            <img src={Icons.cancel} onClick={closeModal} alt="Image" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
