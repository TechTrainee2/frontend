import React from "react";
import NavbarStd from "../../component/student/NavbarStd";
import CardPost from "../../component/student/CardPost";
import SubNavbar from "../../component/student/SubNavbar";
import SmallNavbar from "../../component/student/SmallNavbar";
import TopHeader from "../../component/student/TopHeader";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

function HomePS() {
  const [cookies, setCookie] = useCookies(['access']);

  let { isAuthenticated, loading,user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(cookies.access));
  }, []);

  if (!isAuthenticated && !loading && user==null) return <Navigate to="/SignIn" />;

  return (
    <>
      {loading ? (
        <div>spinner</div>
      ) : (
        <>
          <NavbarStd id={user.id}/>
          <TopHeader />
          <SmallNavbar />
          <div className="dep-uni-sup-container">
            <SubNavbar />
            <div className="dep-uni-sup-card">
              <CardPost />
              <CardPost />
              <CardPost />

              <CardPost />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePS;
