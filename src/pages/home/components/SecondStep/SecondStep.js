import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useStorage } from "../../../../storage/StorageContext";
import TimeCountDown from "./TimeCountDown";
import Button from "../Button";
import SecondButton from "../SecondButton";
import GlobalStyles from "../../../../GlobalStyles";
import styles from "../../../../styles/secondStep.module.css";
import Icons from "../../../../constants/Icons";
import Colors from "../../../../constants/Colors";

const SecondStep = ({ selectedRoom }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const storage = useStorage();
  const {
    name,
    address,
    phone,
    type,
    price,
    selectedTime,
    selectedPeriod,
    selectedDate,
  } = location.state ?? {};
  const [clientName, setClientName] = useState("");
  const [checkClientName, setCheckClientName] = useState(true);
  const [clientPhone, setClientPhone] = useState("");
  const [checkClientPhone, setCheckClientPhone] = useState(true);
  const [clientEmail, setClientEmail] = useState("");
  const [checkClientEmail, setCheckClientEmail] = useState(true);
  const [errorEmail, setErrorEmail] = useState(null);
  const [capcha, setCapcha] = useState("");
  const [checkCapcha, setCheckCapcha] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChangeName = (e) => {
    setClientName(e.target.value);
    setCheckClientName(true);
    setSubmitted(false);
  };

  const handleChangePhone = (e) => {
    setClientPhone(e.target.value);
    setCheckClientPhone(true);
    setSubmitted(false);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = (e) => {
    setSubmitted(false);
    if (!isValidEmail(e.target.value)) {
      setErrorEmail("Email is invalid");
    } else {
      setErrorEmail(null);
      setCheckClientEmail(true);
    }
    if (!e.target.value) {
      setErrorEmail(null);
    }
    setClientEmail(e.target.value);
  };

  const handleChangeCapcha = (e) => {
    setCapcha(e.target.value);
    setSubmitted(false);
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (!clientName) {
      setCheckClientName(false);
    }
    if (!clientPhone) {
      setCheckClientPhone(false);
    }
    if (!clientEmail) {
      setCheckClientEmail(false);
    }
    if (!capcha) {
      setCheckCapcha(false);
    }
    setSubmitted(true);
  };
  useEffect(() => {
    if (
      submitted &&
      checkClientName &&
      checkClientPhone &&
      checkClientEmail &&
      checkCapcha
    ) {
      const data = {
        name,
        address,
        phone,
        type,
        price,
        selectedTime,
        selectedPeriod,
        selectedDate,
        clientName,
        clientEmail,
        clientPhone,
      };
      storage.addDataToStorage(clientPhone, data);

      navigate("/third", {
        state: {
          name,
          address,
          phone,
          type,
          price,
          selectedTime,
          selectedPeriod,
          selectedDate,
          clientName,
          clientEmail,
          clientPhone,
        },
      });
    }
  }, [
    submitted,
    checkClientName,
    checkClientPhone,
    checkClientEmail,
    checkCapcha,
    name,
    address,
    phone,
    type,
    price,
    selectedTime,
    selectedPeriod,
    selectedDate,
    clientName,
    clientEmail,
    clientPhone,
  ]);

  return (
    <GlobalStyles>
      <div className={styles.orderInfos}>
        <p className="textNoti">Thông tin đặt chỗ</p>
        <div className={styles.orderInfo}>
          <div className={styles.infos}>
            <div className={styles.info}>
              <img alt="Icon" src={Icons.location} />
              <p className="textDark">
                {name}: {address}
              </p>
            </div>
            <div className={styles.info}>
              <img alt="Icon" src={Icons.phone} />
              <p className="textDark">{phone}</p>
            </div>
            <div className={styles.info}>
              <img alt="Icon" src={Icons.mic} />
              <p className="textDark">{type}</p>
            </div>
            <div className={styles.info}>
              <div className={styles.time}>
                <img alt="Icon" src={Icons.calendar} />
                <p className="textDark">{selectedDate}</p>
              </div>
              <div className={styles.time}>
                <img alt="Icon" src={Icons.time} />
                <p className="textDark">
                  {selectedTime} - {selectedPeriod}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.timerBox}>
            <p className="tetContent">Thời gian còn lại</p>
            <div className={styles.redTime}>
              <TimeCountDown />
              <span>s</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.orderInfos}>
        <p className="textNoti">Thông tin liên lạc</p>
        <div className={styles.inputBox}>
          <div className={styles.inputRow}>
            <div className={styles.inputs}>
              <div className={styles.label}>
                <p className="textDark">Họ và tên</p>
                <p className="textDark" style={{ color: Colors.red }}>
                  *
                </p>
              </div>
              <div
                className={styles.input}
                style={{
                  borderColor: !checkClientName ? Colors.red : Colors.line,
                }}
              >
                <input
                  type="text"
                  value={clientName}
                  placeholder="Nhập họ và tên"
                  onChange={handleChangeName}
                />
              </div>
            </div>

            <div className={styles.inputs}>
              <div className={styles.label}>
                <p className="textDark">Số điện thoại </p>
                <p className="textDark" style={{ color: Colors.red }}>
                  *
                </p>
              </div>
              <div
                className={styles.input}
                style={{
                  borderColor: !checkClientPhone ? Colors.red : Colors.line,
                }}
              >
                <input
                  type="number"
                  value={clientPhone}
                  placeholder="Nhập số điện thoại"
                  onChange={handleChangePhone}
                />
              </div>
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputs}>
              <div className={styles.label}>
                <p className="textDark">Email </p>
                <p className="textDark" style={{ color: Colors.red }}>
                  *
                </p>
              </div>
              <div
                className={styles.input}
                style={{
                  borderColor: !checkClientEmail ? Colors.red : Colors.line,
                }}
              >
                <input
                  type="email"
                  value={clientEmail}
                  placeholder="Nhập email"
                  onChange={handleChangeEmail}
                />
              </div>
              {errorEmail && (
                <p style={{ color: Colors.red, position: "relative" }}>
                  {errorEmail}
                </p>
              )}
            </div>

            <div className={styles.inputs}>
              <div className={styles.label}>
                <p className="textDark">Mã capcha </p>
                <p className="textDark" style={{ color: Colors.red }}>
                  *
                </p>
              </div>
              <div className={styles.inputCapcha}>
                <img alt="Icon" src={Icons.capcha} />
                <div
                  className={styles.input}
                  style={{
                    borderColor: !checkCapcha ? Colors.red : Colors.line,
                  }}
                >
                  <input
                    type="number"
                    value={capcha}
                    onChange={handleChangeCapcha}
                    placeholder="Nhập mã capcha bên trái"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.button}>
          <SecondButton onClick={handleClick}>Chọn bàn khác</SecondButton>
        </div>
        <div className={styles.button}>
          <Button onClick={handleSubmit}>
            <div>
              Đặt bàn
              <span className={styles.lightTime}>
                <span> (</span>
                <TimeCountDown />
                <span>s)</span>
              </span>
            </div>
          </Button>
        </div>
      </div>
    </GlobalStyles>
  );
};

export default SecondStep;
