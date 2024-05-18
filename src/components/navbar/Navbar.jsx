import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.5, duration: 2 }}
        >
          NIVEDITA CHATTERJEE
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 1 }}
          className="social-links"
        >
          <a
            href="https://www.linkedin.com/in/nivedita-chatterjee-bb8027215/"
            target="_blank"
          >
            <motion.img
              src="/linkedin.png"
              alt="LinkedIn"
              whileTap={{ scale: 0.9, duration: 2 }}
              whileHover={{ scale: 1.5, duration: 2 }}
            />
          </a>
          <a
            href="https://codeforces.com/profile/nivedita__021"
            target="_blank"
          >
            <motion.img
              src="/codeforces.png"
              alt="Codeforces"
              whileTap={{ scale: 0.9, duration: 2 }}
              whileHover={{ scale: 1.5, duration: 2 }}
            />
          </a>
          <a
            href="https://leetcode.com/u/nivedita_chatterjee_021/"
            target="_blank"
          >
            <motion.img
              src="/leetcode.png"
              alt="Leetcode"
              whileTap={{ scale: 0.9, duration: 2 }}
              whileHover={{ scale: 1.5, duration: 2 }}
            />
          </a>
          <a href="https://github.com/Nivedita021" target="_blank">
            <motion.img
              src="/github.png"
              alt="Github"
              whileTap={{ scale: 0.9, duration: 2 }}
              whileHover={{ scale: 1.5, duration: 2 }}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
