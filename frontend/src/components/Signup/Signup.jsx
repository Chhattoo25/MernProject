import React from "react";
import styles from "./signup.module.css";
import reg from "../../images/r.jpg";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.formtitle}> Sign Up</h1>
          <form className={styles.registerform}>
            <div className={styles.inp}>
              <label htmlFor="name">
                <i className="zmdi zmdi-account materials-icon-name"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
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
              <label htmlFor="phone">
                <i className="zmdi zmdi-phone-in-talk materials-icon-name"></i>
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                autoComplete="off"
              />
            </div>
            <div className={styles.inp}>
              <label htmlFor="work">
                <i className="zmdi zmdi-slideshow materials-icon-name"></i>
              </label>
              <input
                type="text"
                name="work"
                id="work"
                placeholder="Your Profession"
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
            <div className={styles.inp}>
              <label htmlFor="cpassword">
                <i className="zmdi zmdi-lock materials-icon-name"></i>
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Your Confirm Password"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="submit"
                name="signup"
                id="signup"
                className={styles.formsubmit}
                value={"Register"}
              />
            </div>
          </form>
        </div>
        <div className={styles.imgContainer}>
          <figure>
        
            <img
              src={reg}
              alt="registration pic"
              width="100%"
              height={"250px"}
            />
          </figure>
          <NavLink to="/login">I am already registerd</NavLink>
        </div>
      </div>
    </>
  );
};

export default Signup;
