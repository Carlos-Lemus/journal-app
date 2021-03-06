import React from "react";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleChangeInput] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }

  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is not valid"));
      return false;
    } else if (email.trim().lenght === 0 || !validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.trim().length === 0 || password !== password2) {
      dispatch(setError("Password is not valid"));
      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      {msgError && <div className="auth__alert-error">{msgError}</div>}

      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="your name"
          name="name"
          value={name}
          onChange={handleChangeInput}
        />

        <input
          autoComplete="off"
          className="auth__input"
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChangeInput}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleChangeInput}
        />

        <button className="btn btn-primary mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Alredy registered
        </Link>
      </form>
    </>
  );
};
