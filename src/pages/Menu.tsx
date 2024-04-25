import { useState } from "react";
import MenuTabs from "../components/Menu-tabs";
import { MODULES } from "../constants/menu";
import { useNavigate } from "react-router-dom";

export default function MenuPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const navigateToTest = () => {
    if (selectedValue === "") {
      return;
    }
    if (selectedValue === "Etiquette Tips") {
      navigate("/module-1");
    } else if (selectedValue === "Multiple choice questions") {
      navigate("/module-2");
    } else {
      navigate("/module-3");
    }
  };

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)]">
            <div className="flex flex-col items-center justify-center h-[64vh] mt-[40px]  gap-[40px]">
              {MODULES.map((menu) => {
                return (
                  <MenuTabs
                    key={menu.title}
                    title={menu.title}
                    module={menu.module}
                    clickFunction={handleButtonClick}
                    selectedValue={selectedValue}
                  />
                );
              })}
            </div>
            <div className="flex justify-center pb-[60px]">
              <div className="w-[80%] flex justify-end">
                <button
                  className={`text-white w-max py-[19px] px-[48px] rounded-[16px] ${
                    selectedValue === ""
                      ? "cursor-not-allowed bg-gray-300"
                      : "bg-[#0056D2]"
                  }`}
                  onClick={navigateToTest}
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
