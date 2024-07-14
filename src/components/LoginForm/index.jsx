import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [value, setvalue] = useState("name");

  const handleInputChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default LoginForm;
