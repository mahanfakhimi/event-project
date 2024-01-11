import { motion, useScroll } from "framer-motion";
import CelebritiesList from "../components/CelebritiesList";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeaderMobile from "../components/HeaderMobile";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-yellow-300 h-1 fixed inset-0 origin-left z-10"
      />

      <HeaderMobile />
      <Header />
      <Hero />
      <CelebritiesList />
    </div>
  );
};

export default Home;
