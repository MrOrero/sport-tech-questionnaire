import { useMemo, useState } from "react";
import {
  MODULE_TWO_QUESTIONS,
  module_two_questions,
} from "../constants/module2";
import { shuffleArray } from "../util/util";
import { useNavigate } from "react-router-dom";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import Module2tab from "../components/Module2-tabs";
import Module2DisplayTabs from "../components/Module2-display-tabs";

export default function Module2() {
  const [resetCount, setResetCount] = useState(0);
  const questions = useMemo(
    () => shuffleArray(MODULE_TWO_QUESTIONS).slice(0, 15),
    [resetCount]
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [progress, setProgress] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState<module_two_questions[]>([]);
  const [rightAnswer, setRightAnswer] = useState<module_two_questions[]>([]);
  const [noPrevious, setNoPrevious] = useState(true);
  const [noNext, setNoNext] = useState(true);
  const [persistSelectedValue, setPersistSelectedValue] = useState<string[]>(
    []
  );
  const [goBackOnce, setGoBackOnce] = useState(false);
  const [answerToWrongQuestion, setAnswerToWrongQuestion] = useState([]);
  const [selectedValueForWrongQuestion, setSelectedValueForWrongQuestion] =
    useState([]);
  const currentQuestion: module_two_questions = questions[currentQuestionIndex];

  const naviagate = useNavigate();

  const calculateProgress = () => {
    return (currentQuestionIndex / questions.length) * 100;
  };

  const handleAnswerSelected = (e: any) => {
    setSelectedValue(e.target.value);

    const hasValueForIndex =
      persistSelectedValue[currentQuestionIndex] !== undefined;
    // If there's no value for the current index, just add the new value
    if (!hasValueForIndex) {
      setPersistSelectedValue((prevState) => [...prevState, e.target.value]);
    } else {
      // If there's a value for the current index, replace it with the new value
      setPersistSelectedValue((prevState) => {
        const updatedArray = [...prevState];
        updatedArray[currentQuestionIndex] = e.target.value;
        return updatedArray;
      });
    }

    setNoNext(false);
  };

  const processAnswers = () => {
    const questionsPassed: any = [];
    const questionsFailed: any = [];
    const answerToWrongQuestion: any = [];
    const answerToRightQuestion: any = [];
    const selectedRightAnswer: any = [];
    const selectedWrongAnswer: any = [];

    // Iterate over each question
    questions.forEach((question, index) => {
      // Get the correct answer for the current question
      const correctOption = question.option.find(
        (option: any) => option.key === question.correctAnswer
      );

      // Get the user-selected answer for the current question
      const selectedOption = persistSelectedValue[index];
      // const selectedOption = question.option.find((option : any) => option.key === selectedOptionKey);

      // Compare the correct answer with the user-selected answer
      if (selectedOption === correctOption.option) {
        questionsPassed.push(question); // If they match, add the question to the right answer array
        answerToRightQuestion.push(correctOption); // And push the correct answer into
        selectedRightAnswer.push(selectedOption);
      } else {
        questionsFailed.push(question); // If they don't match, add the question to the wrong answer array
        answerToWrongQuestion.push(correctOption);
        selectedWrongAnswer.push(selectedOption);
      }
    });

    setRightAnswer(questionsPassed);
    setWrongAnswer(questionsFailed);
    setAnswerToWrongQuestion(answerToWrongQuestion);
    setSelectedValueForWrongQuestion(selectedWrongAnswer);
  };

  const handlePreviousClick = () => {
    if (goBackOnce) {
      setCurrentQuestionIndex((prevState) => {
        return prevState - 1;
      });
      if (
        persistSelectedValue.length &&
        persistSelectedValue[currentQuestionIndex - 1]
      ) {
        setSelectedValue(persistSelectedValue[currentQuestionIndex - 1]);
      }
      setGoBackOnce(false);
      setNoPrevious(true);
      setNoNext(false);
    }
  };

  const handleNextClick = () => {
    if (selectedValue !== "" && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
      setNoNext(true);
      setSelectedValue("");
      setNoPrevious(false);
      setGoBackOnce(true);
    }

    if (
      persistSelectedValue.length &&
      persistSelectedValue[currentQuestionIndex + 1]
    ) {
      setSelectedValue(persistSelectedValue[currentQuestionIndex + 1]);
      setNoNext(false);
    }
    if (currentQuestionIndex + 1 === questions.length && selectedValue !== "") {
      processAnswers();
      setProgress(true);
    }
  };

  let buttonText = "Next";
  if (currentQuestionIndex + 1 === questions.length) {
    buttonText = "Finish";
  }

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setDisabled(false);
    setProgress(false);
    setWrongAnswer([]);
    setNoPrevious(true);
    setNoNext(true);
    setPersistSelectedValue([]);
    setGoBackOnce(false);
    setResetCount((prevCount) => prevCount + 1);
    setSelectedValue("");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] sm:h-[80vh] mt-[55px] h-[85vh]">
          <div
            style={{
              width: `${!progress ? calculateProgress() : 100}%`,
              backgroundColor: "#0056D2",
              height: "7px",
              transition: "width 0.5s ease",
            }}
          ></div>
          <div className="sm:px-[55px] px-[20px] pt-[75px]">
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
                    {currentQuestion?.option.map((option, index) => {
                      return (
                        <Module2tab
                          key={index}
                          option={option.option}
                          selectedValue={selectedValue}
                          clickFunction={handleAnswerSelected}
                          correctAnswer={currentQuestion?.correctAnswer}
                          KeyForOption={option.key}
                          disabled={disabled}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-14 max-[426px]:gap-[30px]">
                    <div
                      className={`flex border  border-solid w-[150px] rounded-[10px] max-[426px]:w-full  ${
                        noPrevious
                          ? "cursor-not-allowed border-[#CCCCCC]"
                          : "border-[#0056D2] cursor-pointer"
                      }`}
                      onClick={handlePreviousClick}
                    >
                      <div
                        className={`py-[16px] px-[10px] rounded-l-[10px]  rounded-tl-10
                    ${noPrevious ? "bg-[#CCCCCC]" : "bg-[#0056D2]"}
                    `}
                      >
                        <img src="/backward.svg" className=" w-[17px]" />
                      </div>
                      <div
                        className={`flex flex-grow   rounded-r-[10px] justify-center items-center
                    ${
                      noPrevious
                        ? "bg-[rgba(204,204,204,0.2)]"
                        : "bg-[rgba(0,86,210,0.1)]"
                    }
                    `}
                      >
                        <p
                          className={`flex items-center font-medium text-[19px] 
                      ${noPrevious ? "text-[#CCCCCC]" : "text-[#0056D2]"}
                      `}
                        >
                          Previous
                        </p>
                      </div>
                    </div>
                    {/* space between buttons */}
                    <div
                      className={`flex border  border-solid w-[150px] rounded-[10px] max-[426px]:w-full  ${
                        noNext
                          ? "cursor-not-allowed border-[#CCCCCC]"
                          : "border-[#0056D2] cursor-pointer"
                      }`}
                      onClick={handleNextClick}
                    >
                      <div
                        className={`flex flex-grow   rounded-l-[10px] justify-center items-center
                    ${
                      noNext
                        ? "bg-[rgba(204,204,204,0.2)]"
                        : "bg-[rgba(0,86,210,0.1)]"
                    }
                    `}
                      >
                        <p
                          className={`flex items-center font-medium text-[19px] 
                      ${noNext ? "text-[#CCCCCC]" : "text-[#0056D2]"}
                      `}
                        >
                          {buttonText}
                        </p>
                      </div>
                      <div
                        className={`py-[16px] px-[10px] rounded-r-[10px]  rounded-tl-10
                    ${noNext ? "bg-[#CCCCCC]" : "bg-[#0056D2]"}
                    `}
                      >
                        <img src="/forward.svg" className=" w-[17px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {progress && (
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-medium text-[clamp(20px,4vw,40px)]">
                  Module 2: Multiple Choice
                </h1>
                <div className="relative ">
                  <SemiCircleProgress
                    percentage={(rightAnswer?.length / questions?.length) * 100}
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
                        {rightAnswer?.length}
                        {"/"}
                        {questions?.length}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[17px] sm:flex-nowrap flex-wrap">
                  <button
                    className="text-white bg-[#0056D2] sm:w-max py-[15px] px-[56px] rounded-[16px] w-full"
                    onClick={() => handleReset()}
                  >
                    Restart
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
        {progress && wrongAnswer && wrongAnswer.length > 0 && (
          <div className="pb-[55px]">
            <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] mt-[30px] p-[55px]">
              <div className="flex flex-col gap-[70px]">
                {wrongAnswer.map((question, index) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-col gap-[7px] mb-[25px]">
                        <p className="text-[#0056D2] font-medium">
                          Question {index + 1} of {wrongAnswer?.length}.
                        </p>
                        <h1 className="font-medium">{question.question}</h1>
                      </div>

                      <div className="flex flex-col gap-5">
                        {question.option.map((options) => {
                          return (
                            <Module2DisplayTabs
                              key={options.option}
                              option={options.option}
                              selectedValue={
                                selectedValueForWrongQuestion[index]
                              }
                              clickFunction={handleAnswerSelected}
                              correctAnswer={
                                answerToWrongQuestion[index]["option"]
                              }
                              disabled={true}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
