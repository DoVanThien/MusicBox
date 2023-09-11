import React from "react";
import { useNavigate } from "react-router-dom";

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

    width: 408,
    height: 243,
    borderRadius: 8,
    background: "#fff",
  },
};

export default function ModalCancel({ isOpen, closeModal }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>Huỷ đặt bàn</p>
          <p className={styles.question}>
            Bạn có muốn hủy đặt phòng này &nbsp; không?
          </p>
        </div>
        <div className={styles.button}>
          <SecondButton onClick={closeModal}>Không</SecondButton>
          <Button onClick={handleClick}>Đồng ý</Button>
        </div>
        <div className={styles.cancel}>
          <img src={Icons.cancel} alt="Cancel" onClick={closeModal} />
        </div>
      </div>
    </Modal>
  );
}
