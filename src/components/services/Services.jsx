import { motion } from "framer-motion";
import "./services.scss";
import {
  title1,
  title2,
  title3,
  title4,
  card1,
  card2,
  card3,
  card4,
  cardButton,
} from "./constants";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      // variants={variants}
      // initial="initial"
      // whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on improving <br />
          web development and coding skills
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/webd.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Journey </motion.b>from
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>School</motion.b> To
            Internship.
          </h1>
          <a
            href="https://www.linkedin.com/in/nivedita-chatterjee-bb8027215/"
            target="_blank"
          >
            <motion.button
              whileHover={{ backgroundColor: "darkorange", color: "white" }}
            >
              VISIT MY LINKEDIN
            </motion.button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{title1}</h2>
          <p>{card1}</p>
          <button>{cardButton}</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{title2}</h2>
          <p>{card2}</p>
          <button>{cardButton}</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{title3}</h2>
          <p>{card3}</p>
          <button>{cardButton}</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{title4}</h2>
          <p>{card4}</p>
          <button>{cardButton}</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
