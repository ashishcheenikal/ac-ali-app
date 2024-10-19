import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Question from "./components/Question";
import LeaderBoard from "./components/LeaderBoard";
import ErrorPage from "./components/error-page/ErrorPage";
import Root from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "question/:uuid",
          element: <Question />,
        },
        {
          path: "leader-board",
          element: <LeaderBoard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
