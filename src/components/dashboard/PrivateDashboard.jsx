import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateDashboard({ children }) {
    const user = useSelector(state => state.user.user);
    return Object.keys(user).length > 0 ? children : <Navigate to='/login' />
}