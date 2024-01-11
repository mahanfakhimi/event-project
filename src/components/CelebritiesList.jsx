import { motion } from "framer-motion";
import Celebrity from "./Celebrity";
import { CELEBRITYS_INFORMATIONS_DATA } from "../data";

const CelebritiesList = () => {
  return (
    <div className="flex items-center flex-col mt-64">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="text-3xl md:text-6xl font-black"
      >
        برخی از مشاهیر همدان
      </motion.h1>

      <div className="w-full max-w-screen-xl mt-16 flex flex-col gap-y-32 mb-32">
        {CELEBRITYS_INFORMATIONS_DATA.map((poetInformation, index) => (
          <Celebrity key={index} poetInformation={poetInformation} />
        ))}
      </div>
    </div>
  );
};

export default CelebritiesList;
