import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import GlobalStyles from "../../../../GlobalStyles";
import { FormAddress } from "./FormAddress";
import { FormRoom } from "./FormRoom";
import FormDate from "./FormDate";
import { FormTime } from "./FormTime";
import styles from "../../../../styles/fisrtStep.module.css";
import Colors from "../../../../constants/Colors";
import Icons from "../../../../constants/Icons";
import { Suggests } from "../../../../datas/suggests";
import RoomItem from "./RoomItem";

const FirstStep = () => {
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [suggest, setSuggest] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const handleSubmit = () => {
    if (selectedAddressId === 1) {
      setNotFound(true);
    } else {
      setNotFound(false);
      setSuggest(true);
    }
  };

  return (
    <GlobalStyles>
      <div className={styles.container}>
        <div className={styles.forms}>
          <div className={styles.form}>
            <FormAddress setSelectedAddressId={setSelectedAddressId} />
            <FormRoom />
          </div>
          <div className={styles.form}>
            <FormDate />
            <FormTime />
          </div>
        </div>

        <div className={styles.containerButton}>
          <Button onClick={handleSubmit}>
            <p
              className="textLight"
              style={{ color: `${Colors.grayButton}`, margin: 0 }}
            >
              Tìm kiếm
            </p>
          </Button>
        </div>
      </div>

      <div className={styles.solidLine}></div>

      {notFound && (
        <div className={styles.containerResult}>
          <div className={styles.results}>
            <p className="textNoti">Kết quả tìm kiếm</p>
            <div className={styles.result}>
              <img src={Icons.notFound} />
              <div className={styles.textResutl}>
                <p className="subTitle">Tìm kiếm không có kết quả</p>
                <p
                  className="textContent"
                  style={{ color: Colors.darkGray, textAlign: "center" }}
                >
                  Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm
                  của bạn Vui lòng thử từ khoá khác bạn nhé!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {suggest && (
        <div className={styles.containerResult}>
          <div className={styles.results}>
            <p className="textNoti">Kết quả tìm kiếm</p>
            <div className={styles.result}>
              <img src={Icons.notFound} />
              <div className={styles.textResutl}>
                <p className="subTitle">
                  Chúng tôi đã hết phòng trong khoảng thời gian bạn chọn
                </p>
              </div>
            </div>
          </div>

          <div className={styles.dashedLine}></div>

          <div className={styles.suggests}>
            <p className="textNoti">Đề xuất kết quả</p>
            <p className="textContent" style={{ color: Colors.darkGray }}>
              Chúng tôi cũng có những bàn trống tại những địa điểm sau trong
              cùng khoảng thời gian. Nếu bạn quan tâm, xin vui lòng chọn khung
              thời gian đề xuất thích hợp dưới đây.
            </p>
            <div className={styles.roomItems}>
              {Suggests.map((value, key) => {
                return (
                  <RoomItem
                    key={key}
                    name={value.name}
                    address={value.address}
                    phone={value.phone}
                    type={value.type}
                    price={value.price}
                    times={value.times}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </GlobalStyles>
  );
};

export default FirstStep;
