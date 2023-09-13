import React, { useState } from "react";
import Icons from "../../../../constants/Icons";
import { Times } from "../../../../datas/times";
import { Periods } from "../../../../datas/periods";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";
import Colors from "../../../../constants/Colors";

export const FormTime = ({ setSelectedPeriodValue }) => {
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);

  const [selectedTime, setSelectedTime] = useState({});
  const [selectedPeriod, setSelectedPeriod] = useState({});
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("");
  const [selectedOptionTime, setSelectedOptionTime] = useState("");
  const [selectedOptionPeriod, setSelectedOptionPeriod] = useState("");

  const toggleDropdownTime = () => {
    setIsOpenTime(!isOpenTime);
  };

  const toggleDropdownPeriod = () => {
    setIsOpenPeriod(!isOpenPeriod);
  };

  const handleOptionSelectTime = (selectedId) => {
    const selectedTime = Times.find((time) => time.id === selectedId);
    setSelectedTime(selectedTime);
    setTime(selectedTime.time);
    toggleDropdownTime();
    setSelectedOptionTime(selectedTime.time);
    console.log(selectedTime);
  };

  const handleOptionSelectPeriod = (selectedId) => {
    const selectedPeriod = Periods.find((period) => period.id === selectedId);
    setSelectedPeriod(selectedPeriod);
    setPeriod(selectedPeriod.period);
    setSelectedPeriodValue(selectedPeriod.period);
    toggleDropdownPeriod();
    setSelectedOptionPeriod(selectedPeriod.period);
    console.log(selectedPeriod);
  };

  return (
    <GlobalStyles>
      <div className={stylesForm.formContainer}>
        <div className={stylesForm.form}>
          <p className="textLight" style={{ color: `${Colors.black}` }}>
            Chọn giờ
          </p>

          <div className={stylesForm.dropdownsContainer}>
            <div
              className={stylesForm.dropdownContainer}
              onClick={toggleDropdownTime}
            >
              <div className={stylesForm.dropdownHeaderContainer}>
                <div className={stylesForm.dropdownHeader}>
                  {selectedOptionTime ? (
                    <div className={stylesForm.dropdownValue}>
                      {selectedOptionTime}
                    </div>
                  ) : (
                    "Giờ bắt đầu"
                  )}
                </div>
                <img src={Icons.time} alt="Time Icon" />
              </div>

              {isOpenTime && (
                <div
                  className={stylesForm.dropdownListContainer}
                  style={{ maxHeight: 290, overflowY: "auto" }}
                >
                  <ul className={stylesForm.dropdownList}>
                    {Times.map((time) => (
                      <li
                        key={time.id}
                        onClick={() => handleOptionSelectTime(time.id)}
                      >
                        <div>
                          <p className="textContent">{time.time}</p>
                        </div>
                        {selectedOptionTime === time.time && (
                          <img src={Icons.checkIcon} alt="Check Icon" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div
              className={stylesForm.dropdownContainer}
              onClick={toggleDropdownPeriod}
            >
              <div className={stylesForm.dropdownHeaderContainer}>
                <div className={stylesForm.dropdownHeader}>
                  {selectedOptionPeriod ? (
                    <div className={stylesForm.dropdownValue}>
                      {selectedOptionPeriod}
                    </div>
                  ) : (
                    "Thời gian"
                  )}
                </div>
                <img
                  src={isOpenPeriod ? Icons.arrowUp : Icons.arrowDown}
                  alt="Dropdown Arrow"
                />
              </div>

              {isOpenPeriod && (
                <div
                  className={stylesForm.dropdownListContainer}
                  style={{ maxHeight: 290, overflowY: "auto" }}
                >
                  <ul className={stylesForm.dropdownList}>
                    {Periods.map((period) => (
                      <li
                        key={period.id}
                        onClick={() => handleOptionSelectPeriod(period.id)}
                      >
                        <div>
                          <p className="textContent">{period.period}</p>
                        </div>

                        {selectedOptionPeriod === period.period && (
                          <img src={Icons.checkIcon} alt="Check Icon" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
};
