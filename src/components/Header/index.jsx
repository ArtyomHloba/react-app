import logoImg from "./logo.png";
import userImg from "./userPhoto.jpg";
import styles from "./header.module.css";

function Header(props) {
  const { isLogin } = props;

  return (
    <header className={styles.pageHeader}>
      <img className={styles.logoImg} src={logoImg} alt="logo" />
      <h1>Page Title</h1>
      {isLogin ? (
        <img className={styles.userImg} src={userImg} alt="userPhoto" />
      ) : (
        <div>
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      )}
    </header>
  );
}

export default Header;
