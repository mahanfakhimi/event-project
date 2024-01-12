import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-8 bg-yellow-300 hidden xl:flex text-black justify-center w-full backdrop-blur-md z-50"
    >
      <div className="flex items-center justify-between w-full gap-x-4">
        <div className="flex items-center w-full gap-x-4">
          <Link to="/">
            <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              <div className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
                رفتن به خانه
              </div>
            </motion.div>
          </Link>

          <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 * 2 }}>
            <Link to="/game">
              <div className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
                بازی تاریخ در چالش
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 * 2.5 }}>
            <a
              target="_blank"
              href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
              rel="noreferrer"
            >
              <div className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
                رزرو هتل
              </div>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 * 3 }}>
            <Link to="/search">
              <div className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
                جستجوی مکان ها
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="flex gap-x-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 * 3.5 }}>
            <Link to="/login">
              <div className="cursor-pointer active:scale-90 bg-yellow-100 transition-all py-2 px-8 rounded-full">ورود</div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 * 4 }}>
            <Link to="/register">
              <div className="cursor-pointer active:scale-90 bg-yellow-100 transition-all py-2 px-8 rounded-full whitespace-nowrap">ثبت نام</div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
