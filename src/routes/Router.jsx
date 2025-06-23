import Home from "@/page/Home";
import Layout from "@/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Abouts from "@/page/Abouts";
import MainSkills from "@/page/MainSkills";
import Blogs from "@/page/Blog";
import Contacts from "@/page/Contacts";
import Projects from "@/page/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/about", 
        element: <Abouts />,
      },
      {
        path: "/skills", 
        element: <MainSkills />,
      },
      {
        path: "/blog", 
        element: <Blogs/>,
      },
      {
        path: "/contact", 
        element: <Contacts />,
      },
      {
        path: "/project", 
        element: <Projects />,
      },
    ],
  },
]);

export default router;
