import { motion } from "framer-motion";
import inscriptionImg from "../../public/images/_16420ab3-f55d-4d7e-b326-876fcf3af7ae.jpg";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 flex gap-x-14 items-center mt-28">
      <div className="whitespace-nowrap">
        <h2 className="text-8xl font-bold">به همدان</h2>
        <p className="text-4xl mt-8">پایتخت تاریخ و تمدن ایران خوش امدید</p>
      </div>

      <motion.div className="w-full">
        <img
          src={inscriptionImg}
          alt=""
          className="w-full h-96 object-cover rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
