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

    width: 408,
    height: 291,
    borderRadius: 8,
    background: "#fff",
  },
};

export default function ModalSearch({ isOpen, closeModal, openModal }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
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
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button onClick={openModal}>Xác nhận</Button>
        </div>
        <div className={styles.cancel}>
          <img src={Icons.cancel} alt="Cancel" onClick={closeModal} />
        </div>
      </div>
    </Modal>
  );
}
