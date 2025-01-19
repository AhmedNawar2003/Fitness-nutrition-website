import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Diet from "./Components/Pages/Diet/Diet";
import Workout from "./Components/Pages/Workout/Workout";
import Profile from "./Components/Pages/Profile/Profile";

export default function App() {
  let router= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:'/',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'login',element: <Login/>},
      {path:'register',element:<Register/>},
      {path:'diet',element:<Diet/>},
      {path:'workout',element:<Workout/>},
      {path:'profile',element:<Profile/>},
    ]}
  ])
  return <RouterProvider router={router}/>
}
