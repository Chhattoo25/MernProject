
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

function Header() {
const [openHam,setOpenHam] = useState(false)
console.log(openHam)
  return (
    <div className={`${styles.navContainer} ${openHam && styles.activenav}`}>
    <div className={styles.projecttitle}>
      MernProject
    </div>
    <div className={`${styles.navlinks} `}>

   
      <nav>

        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.link} to="/contact">
          Contact
        </NavLink>
        <NavLink className={styles.link} to="/signup">
          Signup
        </NavLink>
        <NavLink className={styles.link} to="/login">
          Login
        </NavLink>
      </nav>
      </div>
      <div className={`${styles.openCloseIcon} ${openHam ? styles.active : styles.inactive}`}>
      <GiHamburgerMenu onClick={()=>setOpenHam(true)} className={`${styles.open} `} />
      <AiOutlineClose onClick={()=>setOpenHam(false)} className={styles.close}/>
      </div>
    </div>
  );
}

export default Header;
