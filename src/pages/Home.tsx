import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <section id="hero__section">
        <div className="relative">
          <div className="bg-[linear-gradient(transparent,rgba(25,25,25))] h-screen z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          <img className="w-full h-screen" src="/hero.png" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full bg-black flex flex-col items-center gap-4 py-[45px]">
            <h1 className="text-white font-black text-[64px] text-center">
              Cybersecurity Training for Athletes
            </h1>
            <button
              className="text-white bg-[#0056D2] w-max py-[19px] px-[48px] rounded-[16px]"
              onClick={() => navigate("/menu")}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
