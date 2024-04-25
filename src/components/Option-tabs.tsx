import { handleTitleClick } from "../util/util";

type optionTabProps = {
  option: string;
  selectedValue: string;
  correctAnswer: string;
  KeyForOption?: string;
  disabled: boolean;
  clickFunction: (e: any) => void;
};

export default function OptionTabs({
  option,
  selectedValue,
  correctAnswer,
  KeyForOption,
  disabled,
  clickFunction,
}: optionTabProps) {
  return (
    <>
      <div
        style={{
          borderColor:
            selectedValue === option
              ? (selectedValue && correctAnswer === option) ||
                correctAnswer === KeyForOption
                ? "#2D7253"
                : "#E23D68"
              : "#dadada",
        }}
        className={`flex border
           border-solid w-full rounded-r-[10px]`}
      >
        <div
          style={{
            backgroundColor:
              selectedValue === option
                ? (selectedValue && correctAnswer === option) ||
                  correctAnswer === KeyForOption
                  ? "#2D7253"
                  : "#E23D68"
                : "#dadada",
          }}
          className={`text-white p-[2px]`}
        ></div>
        <div
          onClick={() => handleTitleClick(option)}
          style={{
            backgroundColor:
              selectedValue === option
                ? (selectedValue && correctAnswer === option) ||
                  correctAnswer === KeyForOption
                  ? "rgba(45, 114, 83, 0.05)"
                  : "rgba(226, 61, 104, 0.05)"
                : "rgba(255, 255, 255, 1)",
          }}
          className="flex justify-between flex-grow px-[15px] py-[10px] rounded-r-[10px] cursor-pointer"
        >
          <div>
            {selectedValue === option &&
              (selectedValue ? (
                selectedValue === correctAnswer ||
                correctAnswer === KeyForOption ? (
                  <p className="flex gap-[7px] mb-[4px]">
                    <img src="/Checkmark.svg" className="w-[14px]" />
                    <span className="font-medium text-[#2D7253]">Correct</span>
                  </p>
                ) : (
                  <p className="flex gap-[7px] mb-[4px]">
                    <img src="/cancle.svg" className="w-[14px]" />
                    <span className="font-medium text-[#E23D68]">Wrong</span>
                  </p>
                )
              ) : null)}
            <p className="flex items-center font-medium text-[18px]">
              {option}
            </p>
          </div>
          <input
            className="border-[#0056D2] cursor-pointer"
            type="radio"
            name={option}
            id={option}
            value={option}
            onChange={clickFunction}
            disabled={disabled}
            checked={selectedValue === option}
          />
        </div>
      </div>
    </>
  );
}
