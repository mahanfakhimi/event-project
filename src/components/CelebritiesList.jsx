import { motion } from "framer-motion";
import Celebrity from "./Celebrity";
import { CELEBRITYS_INFORMATIONS_DATA } from "../data";

const CelebritiesList = () => {
  return (
    <div className="flex items-center flex-col py-14">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="text-3xl md:text-6xl font-black mb-14"
      >
        مشاهیر همدان کیا هستن
      </motion.h1>

      <div className="w-full max-w-screen-xl">
        {CELEBRITYS_INFORMATIONS_DATA.map((poetInformation, index) => (
          <Celebrity key={index} poetInformation={poetInformation} />
        ))}
      </div>
    </div>
  );
};

export default CelebritiesList;
