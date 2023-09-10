import React from "react";
import GlobalStyles from "../../GlobalStyles";
import styles from "../../styles/orderInfo.module.css";

export default function OrderInfo() {
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
              <div className={styles.infos}>
                <p className="textNoti">Thông tin đặt bàn</p>
                <div className={styles.info}></div>
              </div>

              <div className={styles.line}></div>

              <div className={styles.infos}>
                <p className="textNoti">Thông tin liên lạc</p>
                <div className={styles.info}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
}
