import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center h-screen justify-center">
        <div className="flex flex-col items-center gap-y-10 w-full max-w-[500px] p-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-3xl md:text-6xl font-black"
          >
            ورود
          </motion.h1>

          <form className="flex flex-col items-center gap-y-4 w-full">
            <motion.input
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              type="text"
              placeholder="ایمیل"
              className="w-full py-4 p-6 rounded-full outline-none bg-neutral-200 border-neutral-200"
            />
            <motion.input
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              type="password"
              placeholder="رمز عبور"
              className="w-full py-4 p-6 rounded-full outline-none bg-neutral-200 border-neutral-200"
            />
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="w-full">
              <button className="bg-yellow-300 w-full px-8 py-4 transition-all border-2 border-yellow-300 rounded-full hover:opacity-50 hover:scale-95">
                ورود
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }}>
              <Link to="/register">
                <button className="w-fit hover:underline transition-all rounded-full">حساب ندارید پس یکی بسازید</button>
              </Link>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
