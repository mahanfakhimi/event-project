import { motion, useScroll } from "framer-motion";
import CelebritiesList from "../components/CelebritiesList";
import TourismPlacesList from "../components/TourismPlacesList";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-rose-600 h-3 fixed inset-0 origin-left z-10"
      />

      <Header />
      <Hero />
      <CelebritiesList />
      <TourismPlacesList />
    </div>
  );
};

export default Home;
