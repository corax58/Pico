import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import NavigationLayout from "../pages/NavigationLayout";
import ErrorPage from "../pages/ErrorPage";
import PostPage from "@/pages/PostPage";
import MyAlbumsPage from "@/pages/MyAlbumsPage";
import TestPage from "@/pages/TestPage";
import SearchPage from "@/pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NavigationLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/myalbums",
            element: <MyAlbumsPage />,
          },
          {
            path: "/search",
            element: <SearchPage />,
          },
        ],
      },
      {
        path: "/post/:postId",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
