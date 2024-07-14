import { useState } from "react";
import styles from "./LoginForm.module.css";

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

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>LoginForm</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Email: </span>
          <input
            className={styles.formInput}
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
            className={styles.formInput}
            type="password"
            name="password"
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className={styles.submitBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
