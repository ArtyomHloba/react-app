import { useState } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

const LOGIN_FOR_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};

function LoginForm() {
  const [email, setEmeil] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmeil("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    setEmeil(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const inputClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.email.test(email),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.email.test(email),
  });

  const inputClassNamePas = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.password.test(password),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.password.test(password),
  });

  const isSambitBtnDisabled = () => {
    return !(
      LOGIN_FOR_REG_EXP.email.test(email) &&
      LOGIN_FOR_REG_EXP.password.test(password)
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>LoginForm</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Email: </span>
          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="yourmail@mail"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Password: </span>
          <input
            className={inputClassNamePas}
            type="password"
            name="password"
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button
          disabled={isSambitBtnDisabled()}
          className={styles.submitBtn}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
