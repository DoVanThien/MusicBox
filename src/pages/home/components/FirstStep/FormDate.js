import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import MediaQuery from "react-responsive";

import Icons from "../../../../constants/Icons";
import Colors from "../../../../constants/Colors";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";
import styles from "../../../../styles/formDate.module.css";

export const FormDate = ({ setSelectedDate }) => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState();
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date) => {
    return format(date, "dd/MM/yyyy");
  };

  const handleClick = () => {
    setShowCalendar(true);
  };

  const onChange = (date) => {
    setDate(date);
    setShowCalendar(false);
    const formattedDatee = formatDate(date);
    setFormattedDate(formattedDatee);
    const formattedDateMonthDay = formattedDatee.slice(0, 5);
    setSelectedDate(formattedDateMonthDay);
    console.log(formattedDateMonthDay);
  };

  return (
    <GlobalStyles>
      <div className={stylesForm.formContainer}>
        <div className={stylesForm.form}>
          <p className="textDark">Chọn ngày</p>
          <div
            className={styles.form}
            style={showCalendar ? { borderColor: "#7932ED" } : {}}
          >
            {formattedDate === undefined ? (
              <p
                className="textContent"
                style={{ color: `${Colors.darkGray}` }}
                onClick={handleClick}
              >
                Hôm nay
              </p>
            ) : (
              <p className="textContent" onClick={handleClick}>
                {formattedDate}
              </p>
            )}
            <img alt="Icon" src={Icons.calendar} onClick={handleClick} />
          </div>
          {showCalendar && (
            <div className={styles.calendar}>
              <Calendar date={date} onChange={onChange} />
            </div>
          )}
        </div>
      </div>
    </GlobalStyles>
  );
};
