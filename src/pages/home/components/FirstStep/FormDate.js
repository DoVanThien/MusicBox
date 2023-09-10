import React, { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import Icons from "../../../../constants/Icons";
import Colors from "../../../../constants/Colors";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";
import styles from "../../../../styles/formDate.module.css";

export default function FormDate() {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState();
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    console.log(formattedDate);
  }, [date, formattedDate]);

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
  };

  return (
    <GlobalStyles>
      <div className={stylesForm.formContainer}>
        <div className={stylesForm.form}>
          <p className="textLight" style={{ color: `${Colors.black}` }}>
            Chọn ngày
          </p>
          <div className={styles.form}>
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
            {/* <p className="textContent" style={{ color: `${Colors.darkGray}` }}>
            {formattedDate === undefined ? "Hôm nay" : `${formattedDate}`}
          </p> */}
            <img src={Icons.calendar} onClick={handleClick} />
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
}
