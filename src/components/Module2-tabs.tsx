import { handleTitleClick } from "../util/util";

type optionTabProps = {
  option: string;
  selectedValue: string;
  correctAnswer: string;
  KeyForOption?: string;
  disabled: boolean;
  clickFunction: (e: any) => void;
};

export default function Module2tab({
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
          borderColor: selectedValue === option ? "#0056D2" : "#dadada",
        }}
        className={`flex border
             border-solid w-full rounded-r-[10px]`}
      >
        <div
          style={{
            backgroundColor: selectedValue === option ? "#0056D2" : "#dadada",
          }}
          className={`text-white p-[2px]`}
        ></div>
        <div
          className="flex justify-between flex-grow px-[15px] py-[10px] rounded-r-[10px] cursor-pointer"
          onClick={() => handleTitleClick(option)}
        >
          <div>
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
