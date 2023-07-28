import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { Switch } from "antd";

function Header({ onChange, banner, bannerTheme }) {
  const [show, setShow] = React.useState(true);
  let [theme, setTheme] = React.useState(true);

  return (
    <header className="header">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-tabler header__logo"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2F80ED"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path d="M8 9l3 3l-3 3" />
        <motion.line
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            background: "red",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          x1="13"
          y1="15"
          x2="16"
          y2="15"
        />
        <motion.rect
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: 2,
            repeatType: "reverse",
          }}
          animate={{ rotate: 140 }}
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
        />
      </motion.svg>

      <h1>Kevin Camargo</h1>

      <span>{banner}</span>

      <Switch
        className="fade-in header__toggle"
        onChange={() => onChange()}
        checkedChildren={"🌞"}
        unCheckedChildren="🌙"
        defaultChecked
      />
    </header>
  );
}

export default Header;
