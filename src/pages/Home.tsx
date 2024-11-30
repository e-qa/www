import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      className="pt-20 lg:px-20 px-0 h-full flex flex-col gap-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-7xl font-bold" variants={item}>
        FullStack JavaScript <br /> Developer
      </motion.h1>
      <motion.p className="text-xl" variants={item}>
        I'm Eli, a full-stack developer, designing intuitive user <br />
        experiences and robust solutions for businesses and individuals.
      </motion.p>
      <Link to={'/about'}>
        <motion.button
          className="border block rounded-xl p-2 text-center cursor-pointer z-10 w-24"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          About me
        </motion.button>
      </Link>
    </motion.main>
  );
};

export default Home;
