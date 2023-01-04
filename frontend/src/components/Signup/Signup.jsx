import React from "react";
import styles from "./signup.module.css"
import reg from '../../images/r.jpg'
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
            
          </form>
        </div>
        <div className={styles.imgContainer}>
          <img src={reg} width="100%" height={"250px"} />
        </div>
      </div>
    </>
  );
};

export default Signup;
