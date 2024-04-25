import { handleTitleClick } from "../util/util";

type menuTabProps = {
  module: string;
  title: string;
  selectedValue: string;
  clickFunction: (e: any) => void;
};

export default function MenuTabs({
  module,
  title,
  selectedValue,
  clickFunction,
}: menuTabProps) {
  return (
    <>
      <div className="flex border border-[#dadada] border-solid w-[80%] rounded-[10px]">
        <div className="bg-[#0056D2] text-white p-[20px] rounded-l-[10px] rounded-tl-10">
          {module}
        </div>
        <div
          className="flex justify-between flex-grow px-[30px] cursor-pointer"
          onClick={() => handleTitleClick(title)}
        >
          <p className="flex items-center font-medium text-[clamp(15px,4vw,25px)]">
            {title}
          </p>
          <input
            className="border-[#0056D2]"
            type="radio"
            name={title}
            id={title}
            value={title}
            onChange={clickFunction}
            checked={selectedValue === title}
          />
        </div>
      </div>
    </>
  );
}
