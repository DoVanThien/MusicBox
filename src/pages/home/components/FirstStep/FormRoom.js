import React, { useState, useEffect } from "react";
import Icons from "../../../../constants/Icons";
import { Rooms } from "../../../../datas/rooms";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";
import Colors from "../../../../constants/Colors";

export const FormRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState({});
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log(type, price);
  }, [type, price]);

  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedRoom = Rooms.find((room) => room.id === selectedId);
    setSelectedRoom(selectedRoom);
    setType(selectedRoom.type);
    setPrice(selectedRoom.price);
    console.log(selectedRoom);
    console.log("____");
  };
  return (
    <GlobalStyles>
      <div className={stylesForm.form}>
        <form>
          <p
            htmlFor="room-select"
            className="textLight"
            style={{ color: `${Colors.black}` }}
          >
            Chọn phòng
          </p>
          <select
            required
            id="room-select"
            className={stylesForm.select}
            onChange={handleChange}
            style={{
              minWidth: 360,
              overFlow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <option value="" disabled selected hidden>
              <p
                className="textContent"
                style={{ color: `${Colors.darkGray}` }}
              >
                Chọn phòng
              </p>
            </option>
            {Rooms.map((room) => (
              <option key={room.id} value={room.id}>
                <div>
                  <img src={Icons.mic} />
                  <p className="textContent">{room.type}</p>
                </div>

                <div>
                  <img src={Icons.money} />
                  <p className="textContent">{room.price}</p>
                </div>
              </option>
            ))}
          </select>
        </form>
      </div>
    </GlobalStyles>
  );
};
