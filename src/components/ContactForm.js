import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off " onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="form-group input-group col-md-6 ">
          {/* <div className="input-group-text">
                         <i className="fas fa-envelope "></i>
                        </div> */}

            
          <input
            className="form-control"
            name="email"
            style={{ marginTop: "25px" }}
            value={values.email}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group input-group col-md-6 ">
          {/* <div className="input-group-text">
                         <i className="fas fa-envelope "></i>
                        </div> */}
          <input
            className="form-control"
            name="address"
            style={{ marginTop: "25px" }}
            value={values.address}
            onChange={handleInputChange}
            placeholder="Link"
          />
        </div>
      </div>

      <div className="form-group mt-3">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
