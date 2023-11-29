import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useStore } from '@/context/Store.ctx';

export default function PublicLayout() {
    const { userName } = useStore();
    if (userName) {
        return <Navigate to="/" replace={true} />
    }
    return (
        <Outlet />
    )
}