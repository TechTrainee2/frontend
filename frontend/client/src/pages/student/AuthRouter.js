import { useLocation } from 'react-router-dom';
import RequireAuth from './requireslogin';

export default function AuthRoute({ children }) {
    const location = useLocation();
  
    return (
      <RequireAuth key={location.pathname}>
        {children}
      </RequireAuth>
    );
  }