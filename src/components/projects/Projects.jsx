import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Travel Buddy",
    img: "/project1.png",
    description:
      "Its a simple full stack MERN website, used to share travel experiences, one can post their experience, like the posts uploaded by others, delete any unrequired or misinforming post, and update any post by adding further details.",
    githuburl: "https://github.com/Nivedita021/Travelogue-app",
    liveurl: "https://travelsandstories.netlify.app/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    img: "/project2.png",
    description:
      "A video streaming website, built using Youtube's API from the RapidAPI Hub. It has an attractive and easy to use UI which supports features like searching videos, getting suggested videos and channels ,etc.",
    githuburl: "https://github.com/Nivedita021/youtube-clone",
    liveurl: "https://youtubeclone21.netlify.app/",
  },
  {
    id: 3,
    title: "Recipe ",
    img: "/project3.png",
    description:
      "A React website using the spoonacular API, where one can search for their favourite recipes among various cuisines. A newer version has been released with Material UI designs.",
    githuburl: "https://github.com/Nivedita021/my-recipe-website",
    liveurl: "https://tasty-and-healthy-recipes.netlify.app/",
  },
  {
    id: 4,
    title: "Movie Finder",
    img: "/project4.png",
    description:
      "A simple React based movie and series finder. Users can also get information about the plot and actors casted in the movies",
    githuburl: "https://github.com/Nivedita021/movies-and-series-finder",
    liveurl: "https://movies-series-games-shows.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="buttons">
              <a href={item.githuburl} target="_blank">
                {" "}
                <button>Github respository</button>
              </a>
              <a href={item.liveurl} target="_blank">
                <button>Live Website</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects">
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
