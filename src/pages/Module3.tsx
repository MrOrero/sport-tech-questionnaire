import { useEffect, useState } from "react";
import { ANSWERS, TOPICS, answer, topic } from "../constants/module3";
import { scrollToTop, shuffleArray } from "../util/util";
import { toast } from "react-toastify";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { useNavigate } from "react-router-dom";

export default function Module3() {
  const [answersArray, setAnswersArray] = useState<answer[]>([]);
  const [questionSelectedIndex, setQuestionSelectedIndex] = useState<number>();
  const [colorSelected, setColorSelected] = useState<string>("");
  const [wrongAnswer, setWrongAnswer] = useState<any[]>([]);
  const [rightAnswer, setRightAnswer] = useState<any[]>([]);
  const [progress, setProgress] = useState(false);
  const [wrongAnswerTerms, setWrongAnswerTerms] = useState<topic[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    let newArray = shuffleArray(ANSWERS);
    setAnswersArray(newArray);
  }, []);

  const handleQuestionClick = (index: number) => {
    setQuestionSelectedIndex(index);
    setColorSelected(TOPICS[index].color);
  };

  const handleAnswerClick = (index: number) => {
    if (colorSelected !== "") {
      const newArray = answersArray.map((item, i) => {
        if (i === index) {
          return { ...item, selectedColor: colorSelected };
        } else if (item.selectedColor === colorSelected) {
          return { ...item, selectedColor: "#D9D9D9" };
        } else {
          return item;
        }
      });

      setAnswersArray(newArray);
      setColorSelected("");
    }
    setQuestionSelectedIndex(-1);
  };

  const checkColorMatch = (selectedColor: string) => {
    // Iterate over the ANSWERS array
    for (const answer of answersArray) {
      // Check if the selectedColor matches any color in the ANSWERS array
      if (answer.selectedColor === selectedColor) {
        // If a match is found, return true
        return true;
      }
    }
    // If no match is found, return false
    return false;
  };

  const processResult = () => {
    if (!allQuestionsAnswered) {
      toast.error("Please match all the terms to its definition");
      return;
    }

    let wrongAnswerArray: answer[] = [];
    let rightAnswerArray: answer[] = [];
    let wrongAnswerTermArray: topic[] = [];

    answersArray.forEach((item) => {
      if (item.color === item.selectedColor) {
        rightAnswerArray.push(item);
      } else {
        let topicItem: any = TOPICS.find((i) => {
          return i.id === item.id;
        });
        wrongAnswerTermArray.push(topicItem);

        wrongAnswerArray.push(item);
      }
    });

    setWrongAnswer(wrongAnswerArray);
    setRightAnswer(rightAnswerArray);
    setWrongAnswerTerms(wrongAnswerTermArray);
    setProgress(true);
    scrollToTop();
  };

  const tableHeading: string =
    "w-full bg-[#0056D2] text-white text-[30px] px-[16px]";

  const defaultColor: string = "#D9D9D9";

  const allQuestionsAnswered = answersArray.every(
    (item) => item.selectedColor !== "#D9D9D9"
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!progress && (
          <div>
            <p className="mt-[30px] mb-[15px] text-[#0056D2] text-[20px] font-medium">
              Instruction: Match definitions to their terms by selecting each
              term to its corresponding definition.
            </p>
            <div className="pb-[30px]">
              <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] ">
                <div className="flex md:gap-[10px] md:flex-nowrap flex-wrap gap-[30px]">
                  <div className="md:w-[25%] w-[100%]">
                    <div className={tableHeading}>Terms</div>
                    <div className="flex flex-col gap-[8.5px] pt-[8px]">
                      {TOPICS.map((topic, index) => {
                        return (
                          <div
                            onClick={() => handleQuestionClick(index)}
                            key={topic.id}
                            className={`flex items-center justify-between py-[13px] px-[16px] border cursor-pointer`}
                            style={{
                              borderColor: `${
                                questionSelectedIndex === index ||
                                checkColorMatch(topic.color)
                                  ? `${topic.color}`
                                  : "#E2E3E3"
                              }`,
                              borderWidth: `${
                                questionSelectedIndex === index ||
                                checkColorMatch(topic.color)
                                  ? "2px"
                                  : "1px"
                              }`,
                            }}
                          >
                            <p className="font-medium w-[80%]">{topic.topic}</p>
                            <div
                              style={{ backgroundColor: `${topic.color}` }}
                              className={`w-[15px] h-[15px] rounded-[50%]`}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="md:w-[75%] w-[100%]">
                    <div className={tableHeading}>Definition</div>
                    <div className="flex flex-col gap-2 pt-[8.1px]">
                      {answersArray?.map((answer, index) => {
                        return (
                          <div
                            style={{
                              borderColor: `${answer.selectedColor}`,
                              borderWidth: `${
                                answer.selectedColor !== defaultColor
                                  ? "2px"
                                  : "1px"
                              }`,
                            }}
                            onClick={() => handleAnswerClick(index)}
                            key={answer.id}
                            className="flex items-center justify-between min-h-[51px] py-[4px] px-[16px] border cursor-pointer"
                          >
                            <p className="font-medium w-[88%]">
                              {answer.answer}
                            </p>
                            <div
                              style={{
                                backgroundColor: `${answer.selectedColor}`,
                              }}
                              className={`w-[15px] h-[15px] rounded-[50%]`}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[30px]">
                {/* button goes here */}
                <button
                  onClick={processResult}
                  className={`text-white w-max py-[15px] px-[56px] rounded-[16px]
              ${
                allQuestionsAnswered
                  ? "bg-[#0056D2] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed text-[#CCCCCC]"
              }
              `}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        {progress && (
          <div className="pt-[75px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-medium text-[clamp(20px,4vw,40px)]">
                Module 3: Word Match
              </h1>
              <div className="relative ">
                <SemiCircleProgress
                  percentage={
                    (rightAnswer?.length / answersArray?.length) * 100
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
                      {rightAnswer?.length}
                      {"/"}
                      {answersArray?.length}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-[30px]">
              <p className="py-[15px] text-[#0056D2] text-[20px] font-medium">
                Correct Table
              </p>
              <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] ">
                <div className="flex md:gap-[10px] md:flex-nowrap flex-wrap gap-[30px]">
                  <div className="md:w-[25%] w-[100%]">
                    <div className={tableHeading}>Terms</div>
                    <div className="flex flex-col gap-[8.5px] pt-[8px]">
                      {TOPICS.map((topic) => {
                        return (
                          <div
                            key={topic.id}
                            className={`flex items-center justify-between py-[13px] px-[16px] border cursor-pointer border-[#E2E3E3]`}
                          >
                            <p className="font-medium w-[78%]">{topic.topic}</p>
                            <div
                              style={{ backgroundColor: `${topic.color}` }}
                              className={`w-[15px] h-[15px] rounded-[50%]`}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="md:w-[75%] w-[100%]">
                    <div className={tableHeading}>Definition</div>
                    <div className="flex flex-col gap-2 pt-[8.1px]">
                      {answersArray?.map((answer) => {
                        return (
                          <div
                            style={{
                              borderColor: `${answer.color}`,
                              borderWidth: "2px",
                            }}
                            key={answer.id}
                            className="flex items-center justify-between min-h-[51px] py-[4px] px-[16px] border cursor-pointer"
                          >
                            <p className="font-medium w-[88%]">
                              {answer.answer}
                            </p>
                            <div
                              style={{
                                backgroundColor: `${answer.color}`,
                              }}
                              className={`w-[15px] h-[15px] rounded-[50%]`}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {wrongAnswer?.length > 0 && (
              <div className="pb-[30px]">
                <p className="py-[15px] text-[#0056D2] text-[20px] font-medium">
                  The matches you got wrong and your selection
                </p>
                <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] ">
                  <div className="flex md:gap-[10px] md:flex-nowrap flex-wrap gap-[30px]">
                    <div className="md:w-[25%] w-[100%]">
                      <div className={tableHeading}>Terms</div>
                      <div className="flex flex-col gap-[8.5px] pt-[8px]">
                        {wrongAnswerTerms?.map((topic) => {
                          return (
                            <div
                              key={topic?.id}
                              className={`flex items-center justify-between py-[13px] px-[16px] border cursor-pointer border-[#E2E3E3]`}
                            >
                              <p className="font-medium w-[78%]">
                                {topic?.topic}
                              </p>
                              <div
                                style={{ backgroundColor: `${topic?.color}` }}
                                className={`w-[15px] h-[15px] rounded-[50%]`}
                              ></div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="md:w-[75%] w-[100%]">
                      <div className={tableHeading}>Definition</div>
                      <div className="flex flex-col gap-2 pt-[8.1px]">
                        {wrongAnswer?.map((answer) => {
                          return (
                            <div
                              style={{
                                borderColor: `${answer?.selectedColor}`,
                                borderWidth: "2px",
                              }}
                              key={answer?.id}
                              className="flex items-center justify-between min-h-[51px] py-[4px] px-[16px] border cursor-pointer"
                            >
                              <p className="font-medium w-[88%]">
                                {answer?.answer}
                              </p>
                              <div
                                style={{
                                  backgroundColor: `${answer?.selectedColor}`,
                                }}
                                className={`w-[15px] h-[15px] rounded-[50%]`}
                              ></div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center items-center pt-[30px] pb-[60px]">
              <button
                className="text-white bg-[#0056D2] w-max py-[15px] px-[56px] rounded-[16px]"
                onClick={() => navigate("/menu")}
              >
                Main Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
