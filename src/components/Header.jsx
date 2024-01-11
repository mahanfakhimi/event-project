import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-8 bg-yellow-300 hidden lg:flex text-black justify-center backdrop-blur-md z-50"
    >
      <ul className="flex items-center gap-x-4">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <li className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
              رفتن به خانه
            </li>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 1.5 }}
        >
          <li className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
            مکان های تاریخی
          </li>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 2 }}
        >
          <a
            target="_blank"
            href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
            rel="noreferrer"
          >
            <li className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
              بازی تاریخ در چالش
            </li>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 2.5 }}
        >
          <a
            target="_blank"
            href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
            rel="noreferrer"
          >
            <li className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
              رزرو هتل
            </li>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 3 }}
        >
          <Link to="/login">
            <li className="cursor-pointer active:scale-90 bg-yellow-100 transition-all py-2 px-8 rounded-full">
              ورود
            </li>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 3.5 }}
        >
          <Link to="/register">
            <li className="cursor-pointer active:scale-90 bg-yellow-100 transition-all py-2 px-8 rounded-full">
              ثبت نام
            </li>
          </Link>
        </motion.div>
      </ul>
    </motion.header>
  );
};

export default Header;
