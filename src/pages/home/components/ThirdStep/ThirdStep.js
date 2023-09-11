import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import GlobalStyles from "../../../../GlobalStyles";
import Icons from "../../../../constants/Icons";
import styleForm from "../../../../styles/secondStep.module.css";
import styles from "../../../../styles/thirdStep.module.css";
import SecondButton from "../SecondButton";
import ModalCancel from "../ModalCancel";

const ThirdStep = () => {
  const location = useLocation();
  const {
    name,
    address,
    phone,
    type,
    price,
    selectedTime,
    clientName,
    clientEmail,
    clientPhone,
  } = location.state ?? {};
  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);

  const openModal = () => {
    setModalCancelIsOpen(true);
  };

  const closeModal = () => {
    setModalCancelIsOpen(false);
  };

  return (
    <GlobalStyles>
      <div className={styles.container}>
        <div className={styles.successContainer}>
          <div style={{ width: 125, height: 125 }}>
            <img src={Icons.success} alt="Image" />
          </div>
          <div className={styles.texts}>
            <p className="subTitleDark">Bạn đã đặt bàn thành công!</p>
            <p className="textContent6a">
              Cám ơn bạn đã đặt bàn. Chúng tôi đã giữ bàn theo yêu cầu của bạn.
            </p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <div className={styles.infosContainer}>
            <div className={styles.infoContainer}>
              <p className="textNoti">Thông tin đặt chỗ</p>
              <div className={styleForm.infos}>
                <div className={styleForm.info}>
                  <img src={Icons.location} alt="Image" />
                  <p className="textDark">
                    {name}: {address}
                  </p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.phone} alt="Image" />
                  <p className="textDark">{phone}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.mic} alt="Image" />
                  <p className="textDark">{type}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.calendar} alt="Image" />
                  <p className="textDark">{selectedTime}</p>
                </div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <p className="textNoti">Thông tin liên lạc</p>
              <div className={styleForm.infos}>
                <div className={styleForm.info}>
                  <img src={Icons.person} alt="Image" />
                  <p className="textDark">{clientName}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.email} alt="Image" />
                  <p className="textDark">{clientEmail}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.phone} alt="Image" />
                  <p className="textDark">{clientPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.button}>
            <SecondButton onClick={openModal}>Huỷ đặt bàn</SecondButton>
          </div>
        </div>
        <ModalCancel isOpen={modalCancelIsOpen} closeModal={closeModal} />
      </div>
    </GlobalStyles>
  );
};

export default ThirdStep;
