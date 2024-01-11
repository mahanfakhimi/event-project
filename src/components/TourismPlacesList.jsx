import { motion } from "framer-motion";

const TourismPlacesList = () => {
  return (
    <div className="flex items-center flex-col py-14">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="text-3xl md:text-6xl font-black mb-28"
      >
        مکان های تاریخی شهر همدان
      </motion.h1>

      <div className="w-full max-w-screen-xl">
        {/* {POET_INFORMATIONS_DATA.map((poetInformation, index) => (
          <Peot key={index} poetInformation={poetInformation} />
        ))} */}
      </div>
    </div>
  );
};

export default TourismPlacesList;
