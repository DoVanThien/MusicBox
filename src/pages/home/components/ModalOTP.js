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
  },
};

export default function ModalOTP(isOpen) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div style={styles.container}>
        <div style={styles.subContainer}>
          <p style={styles.title}>Tra cứu thông tin đặt chỗ</p>
          <p style={styles.text}>
            Mã xác nhận đã được gửi đến số điện thoại: {}
          </p>
          <div style={styles.field}>
            <p style={styles.label}>
              Mã xác nhận <span style={styles.star}>*</span>
            </p>

            <div style={styles.inputs}>
              <input type="number" style={styles.input} />
              <input type="number" style={styles.input} />
              <input type="number" style={styles.input} />
              <input type="number" style={styles.input} />
            </div>
          </div>

          <div style={styles.button}>
            <Button>Xác nhận</Button>
          </div>

          <p style={styles.text}>Nếu không nhận được mã, thử lại sau 20s</p>

          <div style={styles.cancel}>
            <img src={Icons.cancel} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
