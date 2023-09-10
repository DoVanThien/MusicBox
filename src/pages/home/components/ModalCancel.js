import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import SecondButton from "./SecondButton";

import styles from "../../../styles/modalCancel.module.css";
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

export default function ModalCancel(isOpen) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.title}>Huỷ đặt bàn</p>
          <p style={styles.quesstion}>Bạn có muốn hủy đặt phòng này không?</p>
        </div>
        <div style={styles.button}>
          <SecondButton>Không</SecondButton>
          <Button>Đồng ý</Button>
        </div>
        <div style={styles.cancel}>
          <img src={Icons.cancel} />
        </div>
      </div>
    </Modal>
  );
}
