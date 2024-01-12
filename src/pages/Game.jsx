/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { useState } from "react";
import clsx from "clsx";

const quizQuestions = [
  {
    id: 1,
    question: "چه نامی برای شهر همدان در گذشته استفاده می‌شد؟",
    options: ["همدان", "هگمتانه", "همتان", "حکمتانه"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "غار علیصدر چند کیلومتر طول دارد؟",
    options: [15, 25, 12, 7],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "قدمت غار علیصدر چقدر است؟",
    options: ["152 تا 65 میلیون سال", "2 تا 1 میلیون سال", "62 تا 50 میلیون سال", "190 تا 136 میلیون سال"],
    correctAnswer: 3,
  },
];

const Game = () => {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(quizQuestions[0]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [successOptionindex, setSuccessOptionindex] = useState(null);
  const [incorrectOptionindex, setIncorrectOptionindex] = useState(null);
  const [successAnswerLength, setSuccessAnswerLength] = useState(0);
  const [incorrectAnswerLength, setIncorrectAnswerLength] = useState(0);

  const successAnswer = currentQuizQuestion.options.at(currentQuizQuestion.correctAnswer);
  const nextQuestionIndex = quizQuestions.findIndex((quizQuestion) => quizQuestion.id === currentQuizQuestion.id) + 1;

  const handleCheckQuestion = (option) => {
    const isSuccess = option === successAnswer;

    if (isSuccess) setSuccessAnswerLength((prevValue) => prevValue + 1);
    else setIncorrectAnswerLength((prevValue) => prevValue + 1);

    const index = currentQuizQuestion.options.findIndex((option) => option === successAnswer);

    const incorrectIndex = currentQuizQuestion.options.findIndex((opt) => opt === option);

    if (successOptionindex || incorrectOptionindex) return;

    setSuccessOptionindex(index);
    setIncorrectOptionindex(incorrectIndex);
  };

  const handleNextQuiz = () => {
    if (nextQuestionIndex >= quizQuestions.length) return setIsGameOver(true);

    setSuccessOptionindex(null);
    setIncorrectOptionindex(null);
    setCurrentQuizQuestion(quizQuestions[nextQuestionIndex]);
  };

  const resetGame = () => {
    setIsGameOver(false);
    setSuccessOptionindex(null);
    setIncorrectOptionindex(null);
    setCurrentQuizQuestion(quizQuestions[0]);
    setIncorrectAnswerLength(0);
    setSuccessAnswerLength(0);
  };

  return (
    <div>
      <Header />
      <HeaderMobile />

      {isGameOver ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full flex flex-col items-center pt-14 pb-4 md:pb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black mb-14"
          >
            پایان بازی
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-red-500 font-black mb-14"
          >
            شما {incorrectAnswerLength} اشتباه داشتید
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-green-500 font-black mb-14"
          >
            و {successAnswerLength} جواب درست
          </motion.h2>

          <button onClick={resetGame} className="bg-yellow-300 w-fit px-20  py-3 transition-all rounded-full hover:opacity-50 hover:scale-95">
            بازی مجدد
          </button>
        </motion.div>
      ) : (
        <div className="w-full flex flex-col items-center pt-14 pb-4 md:pb-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-14"
          >
            به بازی چالش در تاریخ خوش امدی
          </motion.h1>

          <div className="p-8 w-full max-w-screen-sm">
            <div>
              <div className="flex items-center justify-between">
                <motion.h1
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="text-sm md:text-lg font-black"
                >
                  {currentQuizQuestion.question}
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="text-sm md:text-lg font-black"
                >
                  {quizQuestions.length} / {quizQuestions.findIndex((quiz) => quiz.id === currentQuizQuestion.id) + 1}
                </motion.h1>
              </div>

              <ul className="mt-8 flex flex-col gap-y-8">
                {currentQuizQuestion.options.map((option, index) => (
                  <motion.div key={index} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 }}>
                    <li
                      key={index}
                      className={clsx(
                        "flex items-center gap-x-4 transition-all py-4 px-6 rounded-full",
                        successOptionindex === index
                          ? "bg-green-500 text-white"
                          : incorrectOptionindex === index
                          ? "bg-red-500 text-white"
                          : "bg-neutral-200",
                        successOptionindex || incorrectOptionindex ? "cursor-not-allowed" : "cursor-pointer hover:opacity-50"
                      )}
                      onClick={() => handleCheckQuestion(option)}
                    >
                      {option}
                    </li>
                  </motion.div>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="flex items-center gap-x-8 mt-8"
              >
                <button
                  onClick={handleNextQuiz}
                  className={clsx(
                    "bg-yellow-300 w-full px-8 py-4 transition-all rounded-full hover:opacity-50 hover:scale-95",
                    (successOptionindex || incorrectOptionindex) === null && "pointer-events-none opacity-50"
                  )}
                >
                  {nextQuestionIndex >= quizQuestions.length ? "پایان" : "بعدی"}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
