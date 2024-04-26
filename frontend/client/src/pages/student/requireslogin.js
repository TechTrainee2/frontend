import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../../features/user";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

export default function RequireAuth({ children }) {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['access']);
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(cookies.access));

  }, [dispatch]);
  
  if (!isAuthenticated && !loading && user == null) return <Navigate to="/SignIn" />;

  return children;
}