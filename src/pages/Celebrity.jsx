import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CELEBRITYS_INFORMATIONS_DATA } from "../data";
import Header from "../components/Header";

const Peat = () => {
  const { id } = useParams();

  const currentPeat = CELEBRITYS_INFORMATIONS_DATA.find(
    (peat) => peat.id == id
  );

  return (
    <div>
      <Header />

      <div className="px-8 flex justify-center flex-col items-start mt-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/" className="z-10">
            <button className="bg-yellow-600 px-10 text-white py-3 transition-all rounded-full hover:opacity-50 hover:scale-95">
              بازگشت
            </button>
          </Link>
        </motion.div>

        <div className="-z-10">
          <div className="w-full h-full fixed bg-black/50 inset-0" />

          <img
            src={currentPeat.image}
            alt=""
            className="w-full h-full fixed inset-0 object-cover blur-md -z-10"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="leading-10 mt-4 text-white" draggable="false">
            {currentPeat.introduction}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Peat;
