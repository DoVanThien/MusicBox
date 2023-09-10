import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "../Button";
import GlobalStyles from "../../../../GlobalStyles";
import Icons from "../../../../constants/Icons";
import styleForm from "../../../../styles/secondStep.module.css";
import styles from "../../../../styles/thirdStep.module.css";
import SecondButton from "../SecondButton";

const ThirdStep = () => {
  const navigate = useNavigate();
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

  const handleSubmit = () => {
    navigate("/order");
  };

  return (
    <GlobalStyles>
      <div className={styles.container}>
        <div className={styles.successContainer}>
          <div style={{ width: 125, height: 125 }}>
            <img scr={Icons.success} />
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
                  <img src={Icons.location} />
                  <p className="textDark">
                    {name}: {address}
                  </p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.phone} />
                  <p className="textDark">{phone}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.mic} />
                  <p className="textDark">{type}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.calendar} />
                  <p className="textDark">{selectedTime}</p>
                </div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <p className="textNoti">Thông tin liên lạc</p>
              <div className={styleForm.infos}>
                <div className={styleForm.info}>
                  <img src={Icons.person} />
                  <p className="textDark">{clientName}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.email} />
                  <p className="textDark">{clientEmail}</p>
                </div>
                <div className={styleForm.info}>
                  <img src={Icons.phone} />
                  <p className="textDark">{clientPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.button}>
            <SecondButton onClick={handleSubmit}>Huỷ đặt bàn</SecondButton>
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
};

export default ThirdStep;
