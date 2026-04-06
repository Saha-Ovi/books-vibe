import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import BooksPage from "../pages/BooksPage/BooksPage";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

 
 export const router=createBrowserRouter([
  {
    path:"/",
    Component:MainLayout,
    children:[
      {
        index:true,
        element:<HomePage></HomePage>
      },
      {
        path:"/books",
        Component:BooksPage
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])