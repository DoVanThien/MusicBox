import React, { useState } from "react";
import MediaQuery from "react-responsive";

import Icons from "../../../../constants/Icons";
import { Rooms } from "../../../../datas/rooms";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";
import Colors from "../../../../constants/Colors";

export const FormRoom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({});
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (selectedId) => {
    const selectedRoom = Rooms.find((room) => room.id === selectedId);
    setSelectedRoom(selectedRoom);
    setType(selectedRoom.type);
    setPrice(selectedRoom.price);
    toggleDropdown();
    setSelectedOption({
      type: selectedRoom.type,
      price: selectedRoom.price,
    });
    console.log(selectedRoom);
  };
  return (
    <GlobalStyles>
      <MediaQuery minWidth={1224}>
        <div className={stylesForm.formContainer}>
          <div className={stylesForm.form}>
            <p htmlFor="room-select" className="textDark">
              Chọn phòng
            </p>
            <div
              className={stylesForm.dropdownContainer}
              onClick={toggleDropdown}
            >
              <div
                className={stylesForm.dropdownHeaderContainer}
                style={isOpen ? { borderColor: "#7932ED" } : {}}
              >
                <div className={stylesForm.dropdownHeader}>
                  {selectedOption ? (
                    <div className={stylesForm.dropdownValue}>
                      {selectedOption.type} - {selectedOption.price}
                    </div>
                  ) : (
                    "Chọn phòng"
                  )}
                </div>
                <img
                  src={isOpen ? Icons.arrowUp : Icons.arrowDown}
                  alt="Dropdown Arrow"
                />
              </div>

              {isOpen && (
                <div
                  className={stylesForm.dropdownListContainer}
                  style={{ zIndex: 1 }}
                >
                  <ul className={stylesForm.dropdownList}>
                    {Rooms.map((room) => (
                      <li
                        key={room.id}
                        onClick={() => handleOptionSelect(room.id)}
                        style={
                          selectedOption &&
                          selectedOption.type === room.type &&
                          selectedOption.price === room.price
                            ? { background: "#F9FAFB" }
                            : {}
                        }
                      >
                        <div className={stylesForm.dropdownItems}>
                          <div className={stylesForm.dropdownItem}>
                            <img src={Icons.mic} alt="Mic Icon" />
                            <p className="textContent">{room.type}</p>
                          </div>

                          <div className={stylesForm.dropdownItem}>
                            <img src={Icons.money} alt="Money Icon" />
                            <p className="textContent">{room.price}</p>
                          </div>
                        </div>
                        {selectedOption &&
                          selectedOption.type === room.type &&
                          selectedOption.price === room.price && (
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
      </MediaQuery>

      <MediaQuery maxWidth={375}>
        <div className={stylesForm.formContainer}>
          <div className={stylesForm.form}>
            <p htmlFor="room-select" className="textDark">
              Chọn phòng
            </p>
            <div
              className={stylesForm.dropdownContainer}
              onClick={toggleDropdown}
            >
              <div
                className={stylesForm.dropdownHeaderContainer}
                style={isOpen ? { borderColor: "#7932ED" } : {}}
              >
                <div className={stylesForm.dropdownHeader}>
                  {selectedOption ? (
                    <div className={stylesForm.dropdownValue}>
                      {selectedOption.type} - {selectedOption.price}
                    </div>
                  ) : (
                    "Chọn phòng"
                  )}
                </div>
                <img
                  src={isOpen ? Icons.arrowUp : Icons.arrowDown}
                  alt="Dropdown Arrow"
                />
              </div>

              {isOpen && (
                <div
                  className={stylesForm.dropdownListContainer}
                  style={{ zIndex: 1 }}
                >
                  <ul className={stylesForm.dropdownList}>
                    {Rooms.map((room) => (
                      <li
                        key={room.id}
                        onClick={() => handleOptionSelect(room.id)}
                        style={
                          selectedOption &&
                          selectedOption.type === room.type &&
                          selectedOption.price === room.price
                            ? { background: "#F9FAFB" }
                            : {}
                        }
                      >
                        <div className={stylesForm.dropdownItems}>
                          <div className={stylesForm.dropdownItem}>
                            <img src={Icons.mic} alt="Mic Icon" />
                            <p className="textContent">{room.type}</p>
                          </div>

                          <div className={stylesForm.dropdownItem}>
                            <img src={Icons.money} alt="Money Icon" />
                            <p className="textContent">{room.price}</p>
                          </div>
                        </div>
                        {selectedOption &&
                          selectedOption.type === room.type &&
                          selectedOption.price === room.price && (
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
      </MediaQuery>
    </GlobalStyles>
  );
};
