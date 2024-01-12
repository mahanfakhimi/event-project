import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <motion.div transition={{ delay: 0.75, duration: 0.4 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="w-full p-8">
        <button onClick={() => setIsOpen(true)} className="bg-yellow-300 w-fit px-8 py-3 transition-all rounded-full hover:opacity-50 hover:scale-95">
          باز کردن منو
        </button>
      </motion.div>

      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          "w-full h-full fixed inset-0 bg-black/30 transition-all duration-500 xl:invisible",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <div
        className={clsx(
          "p-8 bg-yellow-300 fixed top-0 h-full w-3/4 z-50 transition-all duration-500 max-w-96",
          isOpen ? "opacity-100 visible right-0" : "opacity-0 invisible -right-[100vw]"
        )}
      >
        <ul className="flex flex-col gap-y-8">
          <Link to="/">
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">رفتن به خانه</li>
          </Link>

          <Link to="/game">
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">
              بازی تاریخ در چالش
            </li>
          </Link>

          <a target="_blank" href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86" rel="noreferrer">
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">رزرو هتل</li>
          </a>

          <Link to="/search">
            <div className="cursor-pointer active:scale-90 hover:bg-yellow-200 hover:text-black transition-all py-2 px-8 rounded-full">
              جستجوی مکان ها
            </div>
          </Link>

          <Link to="/login">
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">ورود</li>
          </Link>

          <Link to="/register">
            <li className="cursor-pointer active:scale-90 hover:bg-white hover:text-black transition-all py-4 px-8 rounded-full">ثبت نام</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
