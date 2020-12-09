import React, { Component} from "react";
import { Link } from "react-router-dom";


function AddDealComponent(props) {
    const {
        productName, percentOff, storeName, address, onProductNameChange,
         onPercentOffChange, onStoreNameChange, onAddressChange, onSubmitClick
     } = props;
    return (
        <>
        <input id="percent_off"
             name="Name"
      placeholder="Name"
         onChange={onPercentOffChange}
             type="text"
             value={percentOff}
              />
        <br />
            <h1>Check-In</h1>
            <p>Put the exact hour of arrived.</p>
            <input id="product_name"
                 name="Check-In"
          placeholder="Check-In"
             onChange={onProductNameChange}
                 type="text"
                 value={productName}
            />
            <br />

            <input id="store"
                 name="Date"
          placeholder="Date"
             onChange={onStoreNameChange}
             value={storeName}
                 type="text"
                 />
            <br />
            <input id="address"
                 name="Check Out"
          placeholder="Check Out"
             onChange={onAddressChange}
             value={address}
                 type="text" />
            <br /><br />
            <button id="add"
                  type="button"
                  onClick={onSubmitClick}>Submit
            </button>

            <br />
            <br />
            <Link to="/dashboard">Back</Link>

        </>
    );
}

export default AddDealComponent
