import React, { useState, useEffect } from "react";
import Icons from "../../../../constants/Icons";
import { Times } from "../../../../datas/times";
import { Periods } from "../../../../datas/periods";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";
import Colors from "../../../../constants/Colors";

export const FormTime = () => {
  const [selectedTime, setSelectedTime] = useState({});
  const [selectedPeriod, setSelectedPeriod] = useState({});
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("");

  useEffect(() => {
    console.log(time, period);
  }, [time, period]);

  const handleChangeTime = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedTime = Times.find((time) => time.id === selectedId);
    setSelectedTime(selectedTime);
    setTime(selectedTime.time);
    console.log(selectedTime);
    // console.log("____");
  };

  const handleChangePeriod = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedPeriod = Periods.find((period) => period.id === selectedId);
    setSelectedPeriod(selectedPeriod);
    setPeriod(selectedPeriod.period);
    console.log(selectedPeriod);
    // console.log("____");
  };
  return (
    <GlobalStyles>
      <div className={stylesForm.form}>
        <form>
          <p
            htmlFor="time-select"
            className="textLight"
            style={{ color: `${Colors.black}` }}
          >
            Chọn giờ
          </p>

          <select
            required
            id="time-select"
            className={stylesForm.selectTime}
            onChange={handleChangeTime}
            style={{ marginRight: "16px" }}
          >
            <option value="" disabled selected hidden>
              <p
                className="textContent"
                style={{ color: `${Colors.darkGray}` }}
              >
                Giờ bắt đầu
              </p>
            </option>
            {Times.map((time) => (
              <option key={time.id} value={time.id}>
                <p className="textContent">{time.time}</p>
              </option>
            ))}
          </select>

          <select
            required
            id="period-select"
            className={stylesForm.selectTime}
            onChange={handleChangePeriod}
          >
            <option value="" disabled selected hidden>
              <p
                className="textContent"
                style={{ color: `${Colors.darkGray}` }}
              >
                Thời gian
              </p>
            </option>
            {Periods.map((period) => (
              <option key={period.id} value={period.id}>
                <p className="textContent">{period.period}</p>
              </option>
            ))}
          </select>
        </form>
      </div>
    </GlobalStyles>
  );
};
