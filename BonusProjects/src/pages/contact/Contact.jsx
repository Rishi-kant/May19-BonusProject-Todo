import React, { useState } from "react";
import style from "./Contact.module.css";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!fname.trim()) {
      newErrors.firstName = "first name is required";
      isValid = false;
    }
    if (!lname.trim()) {
      newErrors.lastName = "Last Name is Required";
      isValid = false;
    }
    if (!emailregex.test(email)) {
      newErrors.email = "Invalid email Adress";
      isValid = false;
    }
    if (!phoneRegex.test(number)) {
      newErrors.phoneNumber = "Invalid phone number (10 disits)";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        FirstName: fname,
        LastName: lname,
        email: email,
        number: number,
      };
      localStorage.setItem("detail", JSON.stringify(user));
      navigate("/");
    }
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <p>First Name:-</p>
          <input
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            type="text"
            className={style.inp}
          />
          <p>
            {errors.firstName && (
              <span className={style.errors}>{errors.firstName}</span>
            )}
          </p>
        </div>
        <div>
          <p>Last Name:-</p>
          <input
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            type="text"
            className={style.inp}
          />
          <p>
            {errors.lastName && (
              <span className={style.errors}>{errors.lastName}</span>
            )}
          </p>
        </div>
        <div>
          <p> Email:-</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={style.inp}
          />
          <p>
            {errors.email && (
              <span className={style.errors}>{errors.email}</span>
            )}
          </p>
        </div>
        <div>
          <p>Phone Number:-</p>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            className={style.inp}
          />
          <p>
            {errors.phoneNumber && (
              <span className={style.errors}>{errors.phoneNumber}</span>
            )}
          </p>
        </div>
        <button className={style.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
