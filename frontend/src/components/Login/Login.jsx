import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import sign from "../../images/sign.jpg";
const Login = () => {
  return (
    <>
      <div className={styles.mainContainer}>
      {/* imagecontainer  */}
        <div className={styles.imgContainer}>
          <figure>
            <img src={sign} alt="signin  pic" width="100%" height={"250px"} />
          </figure>
          <div style={{ textAlign: "center" }}>
            <NavLink to="/signup">Create an Account</NavLink>
          </div>
        </div>
            {/* imagecontainer end  */}
        <div className={styles.formContainer}>
          <h1 className={styles.formtitle}> Sign In</h1>
          <form className={styles.signinform}>
            <div className={styles.inp}>
              <label htmlFor="email">
                <i className="zmdi zmdi-email materials-icon-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                autoComplete="off"
              />
            </div>

            <div className={styles.inp}>
              <label htmlFor="password">
                <i className="zmdi zmdi-lock materials-icon-name"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                autoComplete="off"
              />
            </div>

            <div>
              <input
                type="submit"
                name="signup"
                id="signup"
                className={styles.formsubmit}
                value={"Sign In "}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
