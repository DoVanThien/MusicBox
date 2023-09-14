import React from "react";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";

import Modal from "react-modal";
import Button from "./Button";
import SecondButton from "./SecondButton";

import styles from "../../../styles/modalCancel.module.css";
import Icons from "../../../constants/Icons";

const customStylesDesktop = {
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

const customStylesMobile = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: 303,
    height: 203,
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
    <>
      <MediaQuery minWidth={1224}>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStylesDesktop}
        >
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
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStylesMobile}
        >
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
      </MediaQuery>
    </>
  );
}
