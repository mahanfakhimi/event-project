import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-8 bg-gradient-to-l from-yellow-600/50 to-amber-800 text-white mx-8 mt-8 rounded-full flex justify-center backdrop-blur-md sticky top-8 z-50"
    >
      <ul className="flex items-center gap-x-8">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-2 px-8 rounded-full">
              رفتن به خانه
            </li>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 1.5 }}
        >
          <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-2 px-8 rounded-full">
            مکان های تاریخی
          </li>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 2 }}
        >
          <a
            target="_blank"
            href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
            rel="noreferrer"
          >
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-2 px-8 rounded-full">
              رزرو هتل
            </li>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 2.5 }}
        >
          <a
            target="_blank"
            href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
            rel="noreferrer"
          >
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-2 px-8 rounded-full">
              درخواست تاکسی
            </li>
          </a>
        </motion.div>
      </ul>
    </motion.header>
  );
};

export default Header;
