import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './pages/main/Home';
import AboutUs from './pages/main/AboutUs';
import SignIn from './pages/main/SignIn';
import SignUp from './pages/main/SignUp';
import HomePS from './pages/student/HomePS';
import AccountPS from './pages/student/AccountPS';
import EditPS from './pages/student/EditPS';
import HomeUS from './pages/uniSuper/HomeUS';
import ReportUniSuper from './pages/uniSuper/ReportUniSuper';
import StudentApplication from './pages/uniSuper/StudentApplication';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element:<AboutUs/>
  },
  {
    path: "/SignIn",
    element:<SignIn/>
  },
  {
    path: "/SignUp",
    element:<SignUp/>
  },
  {
    path: "/stdHome",
    element:<HomePS/>
  },
  {
    path: "/stdAcc",
    element:<AccountPS/>
  },
  {
    path: "/stdEdit",
    element:<EditPS/>
  },
  {
    path:"uniSuper",
    element:<HomeUS/>
  },
  {
    path:"reportUniSuper",
    element:<ReportUniSuper/>
  },
  {
    path:"studentApplication",
    element:<StudentApplication/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
