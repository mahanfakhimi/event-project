/* eslint-disable react/prop-types */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Celebrity = (props) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-50px" });

  const {
    poetInformation: { name, introduction, image, id },
  } = props;

  const motionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const motionTransition = { delay: 0.5, duration: 0.4 };

  return (
    <div
      ref={ref}
      className="flex items-center gap-x-14 mb-28 flex-col lg:flex-row p-8"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={motionVariants}
        transition={motionTransition}
        className="w-full lg:min-w-96"
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-all rounded-3xl hover:scale-95"
        />
      </motion.div>

      <div className="flex flex-col justify-between">
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          variants={motionVariants}
          transition={{ ...motionTransition, delay: 1 }}
          className="text-3xl mb-4 w-fit font-black mt-8 lg:mt-0"
        >
          {name}
        </motion.p>

        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          variants={motionVariants}
          transition={{ ...motionTransition, delay: 1.5 }}
          className="leading-10 line-clamp-6"
        >
          {introduction}
        </motion.p>

        <Link to={`/peats/${id}`}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
            variants={motionVariants}
            transition={{ ...motionTransition, delay: 2 }}
            className="w-full"
          >
            <button className="bg-yellow-600 w-full text-white py-3 transition-all rounded-full mt-4 hover:opacity-50 hover:scale-95">
              بیشتر
            </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Celebrity;
