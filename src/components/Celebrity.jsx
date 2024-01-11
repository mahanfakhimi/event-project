/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Celebrity = (props) => {
  const {
    poetInformation: { name, introduction, image, id },
  } = props;

  return (
    <motion.div
      viewport={{ margin: "-150px" }}
      className="flex items-center gap-x-14 flex-col lg:flex-row px-8"
    >
      <motion.div
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
          transition={{ delay: 0.25, duration: 0.4 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl mb-4 w-fit font-black mt-8 lg:mt-0"
        >
          {name}
        </motion.p>

        <motion.p
          transition={{ delay: 0.5, duration: 0.4 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="leading-10 line-clamp-6"
        >
          {introduction}
        </motion.p>

        <Link to={`/peats/${id}`}>
          <motion.div
            transition={{ delay: 0.75, duration: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <button className="bg-yellow-600 w-full text-white py-3 transition-all rounded-full mt-4 hover:opacity-50 hover:scale-95">
              بیشتر
            </button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Celebrity;
