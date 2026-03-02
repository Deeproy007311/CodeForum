import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/layout/AppLayout";
import { Ask } from "./pages/Ask";
import { Tags } from "./pages/Tags";
import { TagDetails } from "./components/tags/TagDetails";
import { QuestionDetails } from "./pages/QuestionDetails";
import { Profile } from "./pages/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "question/:id",
          element: <QuestionDetails />
        },
        {
          path: "ask",
          element: <Ask />
        },
        {
          path: "tags",
          element: <Tags />
        },
        {
          path: "tag/:slug",
          element: <TagDetails />

        },
        {
          path: "profile",
          element: <Profile />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
