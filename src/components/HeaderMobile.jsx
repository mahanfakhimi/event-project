import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <motion.div
        transition={{ delay: 0.75, duration: 0.4 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full p-8"
        onClick={() => setIsOpen(true)}
      >
        <button className="bg-yellow-300 w-fit px-8 py-3 transition-all rounded-full hover:opacity-50 hover:scale-95">
          باز کردن منو
        </button>
      </motion.div>

      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          "w-full h-full fixed inset-0 bg-black/30 transition-all duration-500 lg:invisible",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <div
        className={clsx(
          "p-8 bg-yellow-300 fixed top-0 h-full w-3/4 z-50 transition-all duration-500 max-w-96",
          isOpen
            ? "opacity-100 visible right-0"
            : "opacity-0 invisible -right-[100vw]"
        )}
      >
        <ul className="flex flex-col gap-y-8">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">
                رفتن به خانه
              </li>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 * 1.5 }}
          >
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">
              مکان های تاریخی
            </li>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 * 2 }}
          >
            <Link to="/game">
              <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">
                بازی تاریخ در چالش
              </li>
            </Link>
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
              <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">
                رزرو هتل
              </li>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 * 3 }}
          >
            <a
              target="_blank"
              href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
              rel="noreferrer"
            >
              <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">
                درخواست تاکسی
              </li>
            </a>
          </motion.div>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
