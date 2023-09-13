import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icons from "../../../../constants/Icons";
import styles from "../../../../styles/roomItem.module.css";
import ShowMap from "../SecondStep/Map";

export default function RoomItem({
  name,
  address,
  phone,
  type,
  price,
  times,
  selectedPeriod,
  selectedDate,
}) {
  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (selectedTime) => {
    navigate("/second", {
      state: {
        name,
        address,
        phone,
        type,
        price,
        selectedTime,
        selectedPeriod,
        selectedDate,
      },
    });
  };

  return (
    <div className={styles.roomItem}>
      <div className={styles.infos}>
        <div className={styles.name}>
          <p className="subTitleDark">{name}</p>
        </div>
        <div className={styles.info}>
          <img alt="Icon" src={Icons.location} />
          <p
            className="textContent"
            onMouseOver={() => setShowMap(true)}
            onMouseLeave={() => setShowMap(false)}
          >
            {address}
          </p>
          {showMap && <ShowMap />}
        </div>
        <div className={styles.info}>
          <img alt="Icon" src={Icons.mic} />
          <p className="textContent">{type}</p>
        </div>
        <div className={styles.info}>
          <img alt="Icon" src={Icons.money} />
          <p className="textContent">{price}</p>
        </div>
      </div>

      <div className={styles.times}>
        {times.map((time, key) => {
          return (
            <div
              className={styles.time}
              key={key}
              onClick={() => handleClick(time)}
            >
              <p className="textDark">{time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
