import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  const Location = useLocation();

  return (
    <>
      <main className={`${Location.pathname !== "/" ? "pt-[60px]" : ""}`}>
        {Location.pathname !== "/" && <Header />}
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}
