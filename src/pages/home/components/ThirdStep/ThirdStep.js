import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";

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
    selectedTime,
    selectedPeriod,
    selectedDate,
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
      <MediaQuery minWidth={1224}>
        <div className={styles.container}>
          <div className={styles.successContainer}>
            <div style={{ width: 125, height: 125 }}>
              <img src={Icons.success} alt="Icon" />
            </div>
            <div className={styles.texts}>
              <p className="subTitleDark">Bạn đã đặt bàn thành công!</p>
              <p className="textContent6a">
                Cám ơn bạn đã đặt bàn. Chúng tôi đã giữ bàn theo yêu cầu của
                bạn.
              </p>
            </div>
          </div>

          <div className={styles.subContainer}>
            <div className={styles.infosContainer}>
              <div className={styles.infoContainer}>
                <p className="textNoti">Thông tin đặt chỗ</p>
                <div className={styleForm.infos}>
                  <div className={styleForm.info}>
                    <img src={Icons.location} alt="Icon" />
                    <p className="textDark">
                      {name}: {address}
                    </p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.phone} alt="Icon" />
                    <p className="textDark">{phone}</p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.mic} alt="Icon" />
                    <p className="textDark">{type}</p>
                  </div>
                  <div className={styleForm.info}>
                    <div className={styleForm.info}>
                      <img src={Icons.calendar} alt="Icon" />
                      <p className="textDark">{selectedDate}</p>
                    </div>
                    <div className={styleForm.info}>
                      <img src={Icons.time} alt="Icon" />
                      <p className="textDark">
                        {selectedTime} - {selectedPeriod}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <p className="textNoti">Thông tin liên lạc</p>
                <div className={styleForm.infos}>
                  <div className={styleForm.info}>
                    <img src={Icons.person} alt="Icon" />
                    <p className="textDark">{clientName}</p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.email} alt="Icon" />
                    <p className="textDark">{clientEmail}</p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.phone} alt="Icon" />
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
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <div className={styles.container}>
          <div className={styles.successContainer}>
            <div style={{ width: 125, height: 125 }}>
              <img src={Icons.success} alt="Icon" />
            </div>
            <div className={styles.texts}>
              <p className="subTitleDark">Bạn đã đặt bàn thành công!</p>
              <p className="textContent6a">
                Cám ơn bạn đã đặt bàn. <br></br>Chúng tôi đã giữ bàn theo yêu
                cầu của bạn.
              </p>
            </div>
          </div>

          <div className={styles.subContainer}>
            <div className={styles.infosContainer}>
              <div className={styles.infoContainer}>
                <p className="textNoti">Thông tin đặt chỗ</p>
                <div className={styleForm.infos}>
                  <div className={styleForm.info}>
                    <img src={Icons.location} alt="Icon" />
                    <p className="textDark">
                      {name}: {address}
                    </p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.phone} alt="Icon" />
                    <p className="textDark">{phone}</p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.mic} alt="Icon" />
                    <p className="textDark">{type}</p>
                  </div>
                  <div className={styleForm.info}>
                    <div className={styleForm.info}>
                      <img src={Icons.calendar} alt="Icon" />
                      <p className="textDark">{selectedDate}</p>
                    </div>
                    <div className={styleForm.info}>
                      <img src={Icons.time} alt="Icon" />
                      <p className="textDark">
                        {selectedTime} - {selectedPeriod}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <p className="textNoti">Thông tin liên lạc</p>
                <div className={styleForm.infos}>
                  <div className={styleForm.info}>
                    <img src={Icons.person} alt="Icon" />
                    <p className="textDark">{clientName}</p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.email} alt="Icon" />
                    <p className="textDark">{clientEmail}</p>
                  </div>
                  <div className={styleForm.info}>
                    <img src={Icons.phone} alt="Icon" />
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
      </MediaQuery>
    </GlobalStyles>
  );
};

export default ThirdStep;
