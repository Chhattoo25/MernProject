import React from "react";
import styles from "./Contact.module.css";
import iphone from "../../images/iphone.png";
import email from "../../images/email.png";
import address from "../../images/address.png";
const Contact = () => {
  return (
    <>
      {/* https://img.icons8.com/office/24/000000/iphone.png */}
      <div className={styles.contactInfo}>
        {/* card 1  */}
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <div className={styles.imageDiv}>
              <img src={iphone} />
            </div>
            <div className={styles.info}>
              <h5>phone</h5>
              <h5>+91 84305033</h5>
            </div>
          </div>
        </div>
        {/* card 2 Email */}
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <div className={styles.imageDiv}>
              <img src={email} />
            </div>
            <div className={styles.info}>
              <h5>Email</h5>
              <h5>chhatrapal2523@gmail.com</h5>
            </div>
          </div>
        </div>
        {/* card 3 address */}
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <div className={styles.imageDiv}>
              <img src={address} />
            </div>
            <div className={styles.info}>
              <h5>Address</h5>
              <h5>Chhatarpur</h5>
            </div>
          </div>
        </div>
        {/* card end  */}
      </div>

      {/* contact us form  */}
      <div className={styles.contactForm}>
        <div className={styles.contactContainer}>
          <div className={styles.formContainer}>
            <div className={styles.heading}>Get in Touch</div>
            <form id="form">
              <div className={styles.inpt}>
                <input type="text" placeholder="Your Name" id="name" required='true' />
                <input type="email" placeholder="Enter your Email" id="email" required='true' />
                <input
                  type="number"
                  placeholder="Enter Your Phone"
                  id="phone" required='true'
                />
              </div>
              <div className={styles.textar}>
                <textarea
                  type="text"
                  cols="80"
                  rows={"12"}
                  placeholder="message"
                  required='true'
                ></textarea>
              </div>
              <input type={'submit'} value='Send Message' className={styles.submitbtn} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
