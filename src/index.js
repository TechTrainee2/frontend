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
import CompanyPS from './pages/student/CompanyPS';
import CompPostPS from './pages/student/CompPostPS';
import ReportPS from './pages/student/ReportPS';
import NotificationPS from './pages/student/NotificationPS';
import HomeC from './pages/company/HomeC';
import StudentApplicationC from './pages/company/StudentApplicationC';
import AccountC from './pages/company/AccountC';
import AccEditC from './pages/company/AccEditC';
import PostEditC from './pages/company/PostEditC';
import NewPostC from './pages/company/NewPostC';
import ReportUS from './pages/uniSuper/ReportUS';
import SuperAcc from './pages/uniSuper/SuperAcc';
import SuperAccEdit from './pages/uniSuper/SuperAccEdit';
import HomeDep from './pages/Department/HomeDep';
import DepStd from './pages/Department/DepStd';
import DepUniSuper from './pages/Department/DepUniSuper';
import DepUniSuperStd from './pages/Department/DepUniSuperStd';
import DepNotification from './pages/Department/DepNotification';
import DepReqApproval from './pages/Department/DepReqApproval';
import HomeCS from './pages/compSuper/HomeCS';
import AccountCS from './pages/compSuper/AccountCS';
import EditAccCS from './pages/company/EditAccCS';
import ReportCS from './pages/compSuper/ReportCS';
import StdReportCS from './pages/compSuper/StdReportCS';
import FillReportCS from './pages/compSuper/FillReportCS';
import DepReport from './pages/Department/DepReport';
import DepStdFinalReport from './pages/Department/DepStdFinalReport';
import CompanySuper from './pages/company/CompanySuper';
import AddCompSuper from './pages/company/AddCompSuper';
import CompAssignStd from './pages/company/CompAssignStd';
import CompStd from './pages/company/CompStd';
import StdApplication from './pages/company/StdApplication';
import SuperNotification from './pages/uniSuper/SuperNotification';
import UniSuperViewPost from './pages/uniSuper/UniSuperViewPost';

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
  },
  {
    path: "/stdCompany",
    element:<CompanyPS/>
  },
  {
    path: "/stdPost",
    element:<CompPostPS/>
  },
  {
    path: "/stdReport",
    element:<ReportPS/>
  },
  {
    path: "/stdNotification",
    element:<NotificationPS/>
  },
  {
    path: "/compHome",
    element:<HomeC/>
  },
  {
    path: "/compStdApplication",
    element:<StudentApplicationC/>
  },
  {
    path: "/compProfile",
    element:<AccountC/>
  },
  {
    path: "/compEditProfile",
    element:<AccEditC/>
  },
  {
    path: "/compEditPost",
    element:<PostEditC/>
  },
  {
    path: "/compNewPost",
    element:<NewPostC/>
  },
  {
    path: "/CompSuper",
    element:<CompanySuper/>
  },
  {
    path: "/AddCompSuper",
    element:<AddCompSuper/>
  },
  {
    path: "/assignCompSuper",
    element:<CompAssignStd/>
  },
  {
    path: "/CompStd",
    element:<CompStd/>
  },
  {
    path: "/stdApplications",
    element:<StdApplication/>
  },
  {
    path: "/stdWeeklyReports",
    element:<ReportUS/>
  },
  {
    path: "/superAcc",
    element: <SuperAcc/>
  },
  {
    path: "/SuperEdit",
    element: <SuperAccEdit/>
  },
  {
    path: "/superNotification",
    element: <SuperNotification/>
  },
  {
    path: "/uniSuperViewPost",
    element: <UniSuperViewPost/>
  },
  {
    path: "/depHome",
    element: <HomeDep/> 
  },
  {
    path: "/depStd",
    element: <DepStd/> 
  },
  {
    path: "/depSuper",
    element: <DepUniSuper/>
  },
  {
    path: "/uniSuperStd",
    element: <DepUniSuperStd/>
  },
  {
    path: "/depNotification",
    element: <DepNotification/>
  },
  {
    path: "/depReqApproval",
    element: <DepReqApproval/>
  },
  {
    path: "/depReport",
    element: <DepReport/>
  },
  {
    path: "/depStdFinalReport",
    element: <DepStdFinalReport/>
  },
  {
    path: "/CompSuperHome",
    element: <HomeCS/> 
  },
  {
    path: "/CompSuperAcc",
    element: <AccountCS/> 
  },
  {
    path: "/CompSuperEditAcc",
    element: <EditAccCS/> 
  },
  {
    path: "/CompSuperReport",
    element: <ReportCS/> 
  },
  {
    path: "/CompSuperStdReport",
    element: <StdReportCS/> 
  },
  {
    path: "/CompSuperFillReport",
    element: <FillReportCS/> 
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
