// // withAuth.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
// import { getUser } from "../../features/user";
// import { withCookies, Cookies } from 'react-cookie';

// const withAuth = (WrappedComponent) => {
//   const WithAuth = (props) => {
//     const [cookies,setCookies] = useCookies(['access']);
//     const { isAuthenticated, loading, user } = useSelector((state) => state.user);
//     const dispatch = useDispatch();
//     console.log('====================================');
//     console.log(cookies);
//     console.log('====================================');
//     useEffect(() => {
//       dispatch(getUser(cookies));
//     }, [dispatch, cookies]);

//     if (!isAuthenticated && !loading && user == null) {
//       return <Navigate to="/SignIn" />;
//     }

//     return <WrappedComponent {...props} user={user} />;
//   };

//   return WithAuth;
// };

// export default withCookies(withAuth);