import React from "react";
import Modal from "react-modal";
import Button from "./Button";

import styles from "../../../styles/modalSearch.module.css";
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

export default function ModalSearch(isOpen) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.title}>Tra cứu thông tin đặt chỗ</p>
          <div style={styles.field}>
            <p style={styles.phone}>
              Số điện thoại <span style={styles.star}>*</span>
            </p>
            <input
              type="number"
              placeholder="Nhập số điện thoại đặt bàn"
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.button}>
          <Button>Xác nhận</Button>
        </div>
        <div style={styles.cancel}>
          <img src={Icons.cancel} />
        </div>
      </div>
    </Modal>
  );
}
