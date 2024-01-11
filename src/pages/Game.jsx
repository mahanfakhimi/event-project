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
    options: [
      "152 تا 65 میلیون سال",
      "2 تا 1 میلیون سال",
      "62 تا 50 میلیون سال",
      "190 تا 136 میلیون سال",
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "غار علیصدر چند کیلومتر طول دارد؟",
    options: [15, 25, 12, 7],
    correctAnswer: 2,
  },
];

const Game = () => {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(
    quizQuestions[0]
  );

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const [isGameOver, setIsGameOver] = useState(false);

  const [isCurrentQuestionSuccessAnswer, setIsCurrentQuestionSuccessAnswer] =
    useState(null);

  const handleCheckQuestion = (option) => {
    const nextQuestionIndex =
      quizQuestions.findIndex(
        (quizQuestion) => quizQuestion.id === currentQuizQuestion.id
      ) + 1;

    if (nextQuestionIndex >= quizQuestions.length) return setIsGameOver(true);

    const isSuccess =
      currentQuizQuestion.options.at(currentQuizQuestion.correctAnswer) ===
      option;

    // const optionId = setIsCurrentQuestionSuccessAnswer(
    //   isSuccess ? option.id : false
    // );

    isSuccess && setCurrentQuizQuestion(quizQuestions[nextQuestionIndex]);
  };

  const resetGame = () => {
    setIsGameOver(false);
    setCurrentQuizQuestion(quizQuestions[0]);
  };

  return (
    <div>
      <Header />
      <HeaderMobile />

      {isGameOver ? (
        <div className="w-full px-8 flex flex-col items-center pt-14 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black mb-14"
          >
            پایان بازی
          </motion.h1>

          <button
            onClick={resetGame}
            className="bg-yellow-300 w-fit px-20 text-white py-3 transition-all rounded-full hover:opacity-50 hover:scale-95"
          >
            بازی مجدد
          </button>
        </div>
      ) : (
        <div className="w-full px-8 flex flex-col items-center pt-14 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black mb-14"
          >
            به بازی چالش در تاریخ خوش امدی
          </motion.h1>

          <div className="shadow-xl p-8 w-full max-w-screen-sm border-2 border-neutral-200 rounded-3xl">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-black">
                  {currentQuizQuestion.question}
                </h1>
                <h1 className="text-lg font-black">10 / 01</h1>
              </div>

              <ul className="mt-8 flex flex-col gap-y-8">
                {currentQuizQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "flex items-center gap-x-4 cursor-pointer hover:opacity-50 transition-all p-4 rounded-full",
                      isCurrentQuestionSuccessAnswer === option.id
                        ? "bg-green-600"
                        : isCurrentQuestionSuccessAnswer === false
                        ? "bg-red-600"
                        : "bg-neutral-200"
                    )}
                    onClick={() => handleCheckQuestion(option)}
                  >
                    <input type="radio" className="cursor-pointer" />
                    <li>{option}</li>
                  </div>
                ))}
              </ul>

              <div className="flex items-center gap-x-8 mt-8">
                <button
                  className={`bg-yellow-300 w-full px-8 text-white py-3 transition-all rounded-full hover:opacity-50 hover:scale-95 ${
                    isNextButtonDisabled && "pointer-events-none opacity-50"
                  }`}
                >
                  بعدی
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
