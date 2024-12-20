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
      className="pt-32 lg:px-20 px-0 h-full flex flex-col  gap-2 lg:gap-5
      "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-7xl font-bold" variants={item}>
        Frontend Developer
      </motion.h1>
      <motion.p className="text-xl" variants={item}>
        I’m a frontend developer passionate about solving complex challenges and
        creating intuitive, user-friendly web applications. I focus on
        delivering seamless digital experiences, blending design with technology
        to bring ideas to life.
      </motion.p>
      <Link to={'/about'} className="w-3">
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
