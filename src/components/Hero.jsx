import { motion } from "framer-motion";
import inscriptionImg from "../../public/images/_16420ab3-f55d-4d7e-b326-876fcf3af7ae.jpg";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 flex flex-col lg:flex-row gap-14 items-center mt-28">
      <div className="whitespace-nowrap">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-8xl font-bold">به همدان</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-2xl md:text-4xl mt-8">
            پایتخت تاریخ و تمدن ایران خوش امدید
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full"
      >
        <img
          src={inscriptionImg}
          alt=""
          className="w-full h-96 object-cover rounded-3xl md:rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
