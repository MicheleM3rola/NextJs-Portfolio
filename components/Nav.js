import React, { useState, useRef, useEffect } from "react";

import navStyles from "../styles/Nav.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { social } from "../utils";
import Link from "next/link";
import { motion } from "framer-motion";

const logoVariant = {
  hidden: {
    y: -70,
  },
  visible: {
    y: 0,
    transition: { duration: 1, type: "spring", stiffness: 300 },
  },
};

const linkVariant = {
  hidden: {
    y: -70,
  },
  visible: {
    y: 0,
    transition: { duration: 1, type: "spring", stiffness: 300 },
  },
};

const buttonVariant = {
  hidden: {
    y: -70,
  },
  visible: {
    y: 0,
    transition: { duration: 1, type: "spring", stiffness: 300 },
  },
};

const Nav = () => {
  const [toggle, SetToggle] = useState(false);

  const handleOpenMenu = () => {
    return SetToggle(!toggle);
  };

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navCenter}>
        <div className={navStyles.navHeader}>
          {/**Logo */}

          <div className={navStyles.logo}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={logoVariant}
            >
              "MM.."
            </motion.h1>
          </div>
          {/**Hamburger Menu */}
          <motion.button
            initial="hidden"
            animate="visible"
            variants={buttonVariant}
            type="button"
            className={navStyles.navBtn}
            onClick={handleOpenMenu}
          >
            <HiMenuAlt2 className={navStyles.icon} />
          </motion.button>
        </div>

        {/**navbar list */}
        <div className={toggle ? navStyles.showNav : navStyles.change}>
          <div className={navStyles.closeMenu}>
            <button
              type="button"
              className={navStyles.navBtn}
              onClick={handleOpenMenu}
            >
              <AiOutlineClose className={navStyles.icon} />
            </button>
          </div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={linkVariant}
            className={navStyles.menuList}
          >
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link href="#home">
                <a>Home</a>
              </Link>
            </motion.li>
            <li>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contact Me</a>
              </Link>
            </li>
          </motion.ul>
          {/**Social list */}
          <div className={navStyles.socialCtn}>
            {social.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: `${icon.color}` }}
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// <div className='nav-center'>
//<div className="nav-header">
//<Link to="/">
//   <img src={logo} alt="logo"/>
//</Link>
//<button type="button" onClick={this.handleToggle} className='nav-btn'>
//<FaAlignRight className='nav-icon'/>

//</button>
//</div>
//<ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
//<li>
//  <Link to='/'>Home</Link>

//</li>
//<li>
//  <Link to='/rooms'>Rooms</Link>
//</li>
//</ul>
//</div>
