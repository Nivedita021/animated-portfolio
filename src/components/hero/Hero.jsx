import "./hero.scss";
import { motion } from "framer-motion";
import ExampleDoc from "./resume.pdf";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NIVEDITA CHATTERJEE</motion.h2>
          <motion.h1 variants={textVariants}>
            Programmer and web developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a
              href={ExampleDoc}
              download="Nivedita Chatterjee's Resume"
              target="_blank"
            >
              <motion.button variants={textVariants}>
                Download Latest Resume
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Welcome to my portfolio !
      </motion.div>
      <div className="imageContainer">
        <img src="/heroimage.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
