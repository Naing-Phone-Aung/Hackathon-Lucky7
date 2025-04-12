import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import HomePage from "../pages/HomePage";
import RecipePage from "../pages/RecipePage";
import DailyPlanPage from "../pages/WeeklyPlanPage";
import CommentPage from "../pages/CommentPage";
import CreateCommunityPage from "../pages/CreateCommunityPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CommunityDetailPage from "../pages/CommunityDetailPage";
import PrintPage from "../pages/PrintPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/", //root path
        element: <HomePage />,
      },
      {
        path: "/recipes-page",
        element: <RecipePage />,
      },
      {
        path: "/weekly-plan-page",
        element: <DailyPlanPage />,
      },
      {
        path: "/comment-page",
        element: <CommentPage />,
      },
      {
        path: "/create-community-page",
        element: <CreateCommunityPage />,
      },
      {
        path: "/community-detail-page/:id",
        element: <CommunityDetailPage />,
      },
    ],
  },
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/register-page",
    element: <RegisterPage />,
  },
  {
    path: "/print-page",
    element: <PrintPage />,
  }
]);

export default router;
