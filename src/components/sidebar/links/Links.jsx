import { delay, motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delay: 5,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirectiom: -1,
      delay: 5,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const items = ["Homepage", "Services", "Projects", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
