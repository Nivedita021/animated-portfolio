import { motion } from "framer-motion";
import "./services.scss";

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
          <h2>10th Boards</h2>
          <p>
            I completed my 10th standard from Bishop Westcott Girls' School,
            Doranda, Ranchi, affiliated with I.C.S.E. My subject combination
            included Science, Mathematics, and Computer Applications. I achieved
            an aggregate percentage of 97.2% in the boards examination, securing
            the position of first school topper. Additionally, I attained a
            score of 100% in Computer Applications.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>12th Boards</h2>
          <p>
            I completed my 12th standard from Jawahar Vidya Mandir, Shyamali,
            Ranchi, affiliated with C.B.S.E. My subject combination included
            Science, Mathematics, and Computer Science. I achieved an aggregate
            percentage of 97.2% in the boards examination, securing the position
            of third school topper.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>B.Tech from NIT Jamshedpur</h2>
          <p>
            I appeared for the JEE Mains and JEE Advanced in 2020, and was able
            to clear both the entrance exams. I achieved a percentile of 97.2%
            in JEE Mains and in the same year, I got admission into the
            Electronics and Communication Engineering branch of NIT Jamshedpur.
            Since the beginning, I participated in various extra curricular
            activities and also concentrated on the academics.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Coding, Web development and Internships</h2>
          <p>
            Since my second semester, I've been actively involved in competitive
            coding on platforms like Codeforces and Codechef. Concurrently, I
            began honing my data structures and algorithms skills on LeetCode.
            Moreover, I ventured into web development, undertaking various
            projects ranging from simple HTML and CSS-based ones to fully
            functional apps using the MERN stack. As a result, I secured
            internships offers from Atlassian, Amazon and Hashicorp.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
