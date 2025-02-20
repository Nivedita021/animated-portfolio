import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <motion.div className="sidebar" animate={sidebarOpen ? "open" : "closed"}>
      <motion.div className="circle-bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setSidebarOpen={setSidebarOpen} />
    </motion.div>
  );
};

export default Sidebar;
