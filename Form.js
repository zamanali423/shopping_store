import React from "react";

const Form = () => {
  return (
    <div>
      <form
        className="row g-3 container"
        action="https://formspree.io/f/mnqkqdvv"
        method="Post"
      >
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name="password" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Phone No.
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputAddress2"
            placeholder="039837238"
            name="mobile"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" name="city" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected name="choose">Choose...</option>
            <option name="punjab">Punjab</option>
            <option name="sindh">Sindh</option>
            <option name="balochistan">Balochistan</option>
            <option name="karachi">Karachi</option>
            <option name="kashmir">Kashmir</option>
            <option name="khebar">Khebar Pakhtoon Khawan</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" name="zip" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              name="check"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
