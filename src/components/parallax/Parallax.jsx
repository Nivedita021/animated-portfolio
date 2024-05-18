import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.div style={{ y: yText }} className="parallax-text">
        {type === "services" ? (
          <>
            <h1>About me</h1>
            <p>
              Hi there! I'm Nivedita Chatterjee, a recent graduate
              from NIT Jamshedpur with honors in Electronics and Communication
              Engineering. I'm really passionate about web development and love
              coding on platforms like Leetcode, Codeforces, and Codechef. Last
              summer, I had the amazing opportunity to intern as a Software
              Engineering intern at Atlassian. Currently, I'm enjoying my role
              as a Front-end Engineer (FEE) Intern at Amazon, where I'm learning
              and growing every day.
            </p>
          </>
        ) : (
          <>
            <h1>Projects</h1>
          </>
        )}
      </motion.div>

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
