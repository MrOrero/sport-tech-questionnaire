import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/menu", element: <MenuPage /> },
        { path: "/module-1", element: <Module1 /> },
        { path: "/module-2", element: <Module2 /> },
        { path: "/module-3", element: <Module3 /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
