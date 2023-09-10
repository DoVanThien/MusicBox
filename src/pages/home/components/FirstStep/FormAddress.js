import React, { useState, useEffect } from "react";
import Icons from "../../../../constants/Icons";
import Colors from "../../../../constants/Colors";
import { Addresses } from "../../../../datas/addresses";
import GlobalStyles from "../../../../GlobalStyles";
import stylesForm from "../../../../styles/form.module.css";

export const FormAddress = ({ setSelectedAddressId }) => {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [nameBranch, setNameBranch] = useState("");
  const [phoneBranch, setPhoneBranch] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    console.log(nameBranch, phoneBranch, address);
  }, [nameBranch, phoneBranch, address]);

  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedAddress = Addresses.find(
      (address) => address.id === selectedId
    );
    setSelectedAddress(selectedAddress);
    setNameBranch(selectedAddress.name);
    setPhoneBranch(selectedAddress.phone);
    setAddress(selectedAddress.address);
    setSelectedAddressId(selectedId);
    console.log(selectedAddress);
  };
  return (
    <GlobalStyles>
      <div className={stylesForm.formContainer}>
        <form className={stylesForm.form}>
          <p
            htmlFor="address-select"
            className="textLight"
            style={{ color: `${Colors.black}` }}
          >
            Chọn cơ sở
          </p>
          <select
            required
            className={stylesForm.select}
            id="address-select"
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
                Chọn cơ sở
              </p>
            </option>
            {Addresses.map((address) => (
              <option key={address.id} value={address.id}>
                <img src={Icons.location} />
                <div>
                  <p className="textContent">
                    {address.name} : {address.phone}. {address.address}
                  </p>
                </div>
              </option>
            ))}
          </select>
        </form>
      </div>
    </GlobalStyles>
  );
};
