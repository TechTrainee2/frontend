import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import Home from "./pages/main/Home";
import AboutUs from "./pages/main/AboutUs";
import SignIn from "./pages/main/SignIn";
import SignUp from "./pages/main/SignUp";
import HomePS from "./pages/student/HomePS";
import AccountPS from "./pages/student/AccountPS";
import EditPS from "./pages/student/EditPS";
import HomeUS from "./pages/uniSuper/HomeUS";
import ReportUniSuper from "./pages/uniSuper/ReportUniSuper";

import CompanyPS from "./pages/student/CompanyPS";
import CompPostPS from "./pages/student/CompPostPS";
import ReportPS from "./pages/student/ReportPS";
import NotificationPS from "./pages/student/NotificationPS";
import HomeC from "./pages/company/HomeC";
import StudentApplicationC from "./pages/company/StudentApplicationC";
import AccountC from "./pages/company/AccountC";
import AccEditC from "./pages/company/AccEditC";
import PostEditC from "./pages/company/PostEditC";
import NewPostC from "./pages/company/NewPostC";
import SuperAcc from "./pages/uniSuper/SuperAcc";
import SuperAccEdit from "./pages/uniSuper/SuperAccEdit";
import HomeDep from "./pages/Department/HomeDep";
import DepStd from "./pages/Department/DepStd";
import DepUniSuper from "./pages/Department/DepUniSuper";
import DepUniSuperStd from "./pages/Department/DepUniSuperStd";
import DepNotification from "./pages/Department/DepNotification";
import DepReqApproval from "./pages/Department/DepReqApproval";
import HomeCS from "./pages/compSuper/HomeCS";
import AccountCS from "./pages/compSuper/AccountCS";
import EditAccCS from "./pages/compSuper/EditAccCS";
import ReportCS from "./pages/compSuper/ReportCS";
import StdReportCS from "./pages/compSuper/StdReportCS";
import FillReportCS from "./pages/compSuper/FillReportCS";
import CompSuperAccPS from "./pages/student/CompSuperAccPS";
import UniSuperAccPS from "./pages/student/UniSuperAccPS";
import HomeReg from "./pages/Regestration/HomeReg";
// import StdReg from "./pages/Regestration/AddStd";
// import ProfReg from "./pages/Regestration/AddProfSuper";
import StdReportUS from "./pages/uniSuper/StdReportUS";
import DepReport from "./pages/Department/DepReport";
import DepStdFinalReport from "./pages/Department/DepStdFinalReport";
import CompanySuper from "./pages/company/CompanySuper";
import AddCompSuper from "./pages/company/AddCompSuper";
import CompAssignStd from "./pages/company/CompAssignStd";
import CompStd from "./pages/company/CompStd";
import StdApplication from "./pages/company/StdApplication";
import SuperNotification from "./pages/uniSuper/SuperNotification";
import UniSuperViewPost from "./pages/uniSuper/UniSuperViewPost";
import "./App.css";
import SearchPhone from "./pages/student/SearchPhone";

import { store } from "./store";
import AddProfForm from "./component/Regestration/CreateAccForm";
import UniSuper from "./pages/Regestration/UniSuper";
import AddProfSuper from "./pages/Regestration/AddProfSuper";
import AddStd from "./pages/Regestration/AddStd";
import Student from "./pages/Regestration/Student";
import { CookiesProvider } from "react-cookie";
import RequireAuth from "./pages/student/requireslogin";
import AuthRoute from "./pages/student/AuthRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <AboutUs />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/stdHome",
    element: (
      <>
        <AuthRoute>
          <HomePS />
        </AuthRoute>
      </>
    ),
  },
  {
    path: "/stdAcc/:id",
    
    element: <>
    <AuthRoute>
    <AccountPS />
    </AuthRoute>
    </>,
  },
  {
    path: "/stdEdit",
    element: <>
      <AuthRoute>
        <EditPS />,
      </AuthRoute>
    </>
  },
  {
    path: "/stdCompSuperAcc",
    element: <CompSuperAccPS />,
  },
  {
    path: "/stdUniSuperAcc",
    element: <UniSuperAccPS />,
  },
  {
    path: "/uniSuper",
    element: <>
      <AuthRoute>
        <HomeUS />,
      </AuthRoute>
    </>,
  },
  {
    path: "/reportUniSuper",
    element: <ReportUniSuper />,
  },
  {
    path: "/stdreportUniSuper",
    element: <StdReportUS />,
  },
  {
    path: "/stdCompany",
    element: <CompanyPS />,
  },
  {
    path: "/stdPost/:id",
    element: <>
    <AuthRoute>
      <CompPostPS />,
      </AuthRoute>
    </>,
  },
  {
    path: "/stdReport",
    element: <ReportPS />,
  },
  {
    path: "/stdNotification",
    element: <NotificationPS />,
  },
  {
    path: "/compHome",
    element: <>
    <AuthRoute>
      <HomeC />,
    </AuthRoute>
    </>,
  },
  {
    path: "/compStdApplication",
    element: <StudentApplicationC />,
  },
  {
    path: "/compProfile/:id",
    element: <>
    <AuthRoute>
      <AccountC />,
    </AuthRoute>
    </>,
  },
  {
    path: "/compEditProfile/:id",
    element: <>
      <AuthRoute>
        <AccEditC />,
      </AuthRoute>
      </>,
  },
  {
    path: "/compEditPost/:id",
    element: <>
    <AuthRoute>
      <PostEditC />,
    </AuthRoute>
    </>,
  },
  {
    path: "/compNewPost",
    element:<>
    <AuthRoute>
      <NewPostC/>,
    </AuthRoute>
    </>
  },
  {
    path: "/CompSuper/:id",
    element:<>
    <AuthRoute>
      <CompanySuper />,
    </AuthRoute>
  </>
  },
  {
    path: "/AddCompSuper/:id",
    element: <>
      <AuthRoute>
        <AddCompSuper />,
      </AuthRoute>
    </>
  },
  {
    path: "/assignCompSuper",
    element: <CompAssignStd />,
  },
  {
    path: "/CompStd",
    element: <CompStd />,
  },
  {
    path: "/stdApplications",
    element: <StdApplication />,
  },
  {
    path: "/superAcc/:id",
    element: <>
    <AuthRoute>
      <SuperAcc />,
    </AuthRoute>
    </>,
  },
  {
    path: "/SuperEdit",
    element: <>
      <AuthRoute>
      <SuperAccEdit />,
      </AuthRoute>
    </>
  },
  {
    path: "/superNotification",
    element: <SuperNotification />,
  },
  {
    path: "/uniSuperViewPost",
    element: <UniSuperViewPost />,
  },
  {
    path: "/depHome",
    element: <HomeDep />,
  },
  {
    path: "/depStd",
    element: <DepStd />,
  },
  {
    path: "/depSuper",
    element: <DepUniSuper />,
  },
  {
    path: "/uniSuperStd",
    element: <DepUniSuperStd />,
  },
  {
    path: "/depNotification",
    element: <DepNotification />,
  },
  {
    path: "/depReqApproval",
    element: <DepReqApproval />,
  },
  {
    path: "/depReport",
    element: <DepReport />,
  },
  {
    path: "/depStdFinalReport",
    element: <DepStdFinalReport />,
  },
  {
    path: "/CompSuperHome",
    element: <>
    <AuthRoute>
      <HomeCS />,
    </AuthRoute>
    </>,
  },
  {
    path: "/CompSuperAcc/:id",
    element: <>
    <AuthRoute>
      <AccountCS />,
    </AuthRoute>
    </>,
  },
  {
    path: "/CompSuperEditAcc",
    element: <>
    <AuthRoute>
      <EditAccCS />,
    </AuthRoute>
    </>,
  },
  {
    path: "/CompSuperReport",
    element: <ReportCS />,
  },
  {
    path: "/CompSuperStdReport",
    element: <StdReportCS />,
  },
  {
    path: "/CompSuperFillReport",
    element: <FillReportCS />,
  },
  {
    path: "/RegHome",
    element: <HomeReg />,
  },
  {
    path: "/RegStdForm",
    element: <AddStd />,
  },
  {
    path: "/RegUniSuper",
    element: <UniSuper />,
  },
  {
    path: "/RegStd",
    element: <Student />,
  },
  {
    path: "/RegProfForm",
    element: <AddProfSuper />,
  },
  {
    path: "/searchphone",
    element: <SearchPhone />,
  },
]);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
