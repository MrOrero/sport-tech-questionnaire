import { useMemo, useState } from "react";
import {
  MODULE_ONE_OPTIONS,
  MODULE_ONE_QUESTIONS,
  module_one_questions,
} from "../constants/module1";
import { shuffleArray } from "../util/util";
import OptionTabs from "../components/Option-tabs";
import { useNavigate } from "react-router-dom";
import { SemiCircleProgress } from "react-semicircle-progressbar";

export default function Module1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const questions = useMemo(
    () => shuffleArray(MODULE_ONE_QUESTIONS).slice(0, 7),
    []
  );
  const [disabled, setDisabled] = useState(false);
  const [progress, setProgress] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);

  const currentQuestion: module_one_questions = questions[currentQuestionIndex];

  const naviagate = useNavigate();

  const calculateProgress = () => {
    return (currentQuestionIndex / questions.length) * 100;
  };

  const handleAnswerSelected = (e: any) => {
    setSelectedValue(e.target.value);
    setDisabled(true);
    if (currentQuestion.answer === e.target.value) {
      setCorrectAnswer((prevState) => {
        return [...prevState, e.target.value];
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedValue("");
        setDisabled(false);
      } else {
        setProgress(true);
      }
    }, 1500);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] h-[75vh] mt-[70px]">
          <div
            style={{
              width: `${!progress ? calculateProgress() : 100}%`,
              backgroundColor: "#0056D2",
              height: "7px",
              transition: "width 0.5s ease",
            }}
          ></div>
          <div className="px-[55px] pt-[75px]">
            {!progress && (
              <div>
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[#0056D2] font-medium">
                    Question {currentQuestionIndex + 1} of {questions?.length}.
                  </p>
                  <h1 className="font-medium">{currentQuestion?.question}</h1>
                </div>

                <div className="pt-[50px]">
                  <div className="flex flex-col gap-5">
                    {MODULE_ONE_OPTIONS.map((option) => {
                      return (
                        <OptionTabs
                          key={option}
                          option={option}
                          selectedValue={selectedValue}
                          clickFunction={handleAnswerSelected}
                          correctAnswer={currentQuestion?.answer}
                          disabled={disabled}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {progress && (
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-medium text-[clamp(20px,4vw,40px)]">
                  Module 1: Etiquette Tips
                </h1>
                <div className="relative ">
                  <SemiCircleProgress
                    percentage={
                      (correctAnswer?.length / questions?.length) * 100
                    }
                    size={{
                      width: 300,
                      height: 300,
                    }}
                    strokeWidth={4}
                    strokeColor="#0056D2"
                    hasBackground={true}
                    bgStrokeColor="#CADDF8"
                    fontStyle={{
                      fontSize: "0px",
                      fontWeight: "100",
                      fill: "",
                    }}
                  />
                  <div className="absolute bg-white left-[22%] bottom-[18%] w-[56%] h-[50%] ">
                    <div className="text-center">
                      <p className="text-[#0056D2] font-medium text-[20px]">
                        Your Score
                      </p>
                      <h1 className="font-bold text-[45px]">
                        {correctAnswer?.length}
                        {"/"}
                        {questions?.length}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[17px] sm:flex-nowrap flex-wrap">
                  <button
                    className="text-white bg-[#0056D2] sm:w-max py-[15px] px-[56px] rounded-[16px] w-full "
                    onClick={() => naviagate("/")}
                  >
                    Exit
                  </button>
                  <button
                    className="text-white bg-[#0056D2] sm:w-max py-[15px] px-[56px] rounded-[16px] w-full"
                    onClick={() => naviagate("/menu")}
                  >
                    Main Menu
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
