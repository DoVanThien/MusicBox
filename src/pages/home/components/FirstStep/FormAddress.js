import React, { useState } from "react";
import Icons from "../../../../constants/Icons";
import Colors from "../../../../constants/Colors";
import { Addresses } from "../../../../datas/addresses";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";

export const FormAddress = ({ setSelectedAddressId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [nameBranch, setNameBranch] = useState("");
  const [phoneBranch, setPhoneBranch] = useState("");
  const [address, setAddress] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (selectedId) => {
    const selectedAddress = Addresses.find(
      (address) => address.id === selectedId
    );
    setSelectedAddress(selectedAddress);
    setNameBranch(selectedAddress.name);
    setPhoneBranch(selectedAddress.phone);
    setAddress(selectedAddress.address);
    setSelectedAddressId(selectedId);
    toggleDropdown();
    setSelectedOption({
      name: selectedAddress.name,
      address: selectedAddress.address,
    });
    console.log(selectedAddress);
  };

  return (
    <GlobalStyles>
      <div className={stylesForm.formContainer}>
        <div className={stylesForm.form}>
          <p className="textLight" style={{ color: `${Colors.black}` }}>
            Chọn cơ sở
          </p>

          <div
            className={stylesForm.dropdownContainer}
            onClick={toggleDropdown}
          >
            <div className={stylesForm.dropdownHeaderContainer}>
              <div className={stylesForm.dropdownHeader}>
                {selectedOption ? (
                  <div className={stylesForm.dropdownValue}>
                    {selectedOption.name} - {selectedOption.address}
                  </div>
                ) : (
                  "Chọn cơ sở"
                )}
              </div>
              <img
                src={isOpen ? Icons.arrowUp : Icons.arrowDown}
                alt="Dropdown Arrow"
              />
            </div>

            {isOpen && (
              <div className={stylesForm.dropdownListContainer}>
                <ul className={stylesForm.dropdownList}>
                  {Addresses.map((address) => (
                    <li
                      key={address.id}
                      onClick={() => handleOptionSelect(address.id)}
                    >
                      <img src={Icons.location} alt="Location Icon" />
                      <div>
                        <p className="textContent">
                          {address.name} : {address.phone}. {address.address}
                        </p>
                      </div>
                      <div style={{ width: 30 }}>
                        {selectedOption &&
                          selectedOption.name === address.name && (
                            <img src={Icons.checkIcon} alt="Check Icon" />
                          )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
};
