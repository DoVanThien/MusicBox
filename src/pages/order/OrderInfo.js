import React from "react";
import { useLocation } from "react-router-dom";

import Icons from "../../constants/Icons";
import GlobalStyles from "../../GlobalStyles";
import styles from "../../styles/orderInfo.module.css";
import styleForm from "../../styles/secondStep.module.css";

export default function OrderInfo() {
  const location = useLocation();

  const { matchedData } = location.state ?? {};
  console.log("Order", matchedData);

  return (
    <GlobalStyles>
      <div className={styles.backgr}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <p className="title">Tra cứu thông tin đặt chỗ</p>
              <p className="textContent6a">Đặt lúc: 08:43, Ngày 15/05/2023</p>
            </div>

            <div className={styles.body}>
              <div className={styleForm.infos}>
                <p className="textNoti">Thông tin đặt bàn</p>
                {matchedData ? (
                  <div className={styleForm.infos}>
                    <div className={styleForm.info}>
                      <img alt="Icon" src={Icons.location} />
                      <p className="textDark">
                        {matchedData.name}: {matchedData.address}
                      </p>
                    </div>
                    <div className={styleForm.info}>
                      <img alt="Icon" src={Icons.phone} />
                      <p className="textDark">{matchedData.phone}</p>
                    </div>
                    <div className={styleForm.info}>
                      <img alt="Icon" src={Icons.mic} />
                      <p className="textDark">{matchedData.type}</p>
                    </div>
                    <div className={styleForm.info}>
                      <div className={styleForm.time}>
                        <img alt="Icon" src={Icons.calendar} />
                        <p className="textDark">{matchedData.selectedDate}</p>
                      </div>
                      <div className={styleForm.time}>
                        <img alt="Icon" src={Icons.time} />
                        <p className="textDark">
                          {matchedData.selectedTime} -{" "}
                          {matchedData.selectedPeriod}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>No matched data found.</p>
                )}
              </div>

              <div className={styles.line}></div>

              <div className={styleForm.infos}>
                <p className="textNoti">Thông tin liên lạc</p>
                {matchedData ? (
                  <div className={styleForm.infos}>
                    <div className={styleForm.info}>
                      <img alt="Icon" src={Icons.person} />
                      <p className="textDark">{matchedData.clientName}</p>
                    </div>
                    <div className={styleForm.info}>
                      <img alt="Icon" src={Icons.phone} />
                      <p className="textDark">{matchedData.clientPhone}</p>
                    </div>
                    <div className={styleForm.info}>
                      <img alt="Icon" src={Icons.email} />
                      <p className="textDark">{matchedData.clientEmail}</p>
                    </div>
                  </div>
                ) : (
                  <p>No matched data found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
}
