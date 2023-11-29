import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useStore } from '@/context/Store.ctx';

export default function PublicLayout() {
    const { summoner } = useStore();
    if (summoner) {
        return <Navigate to="/" replace={true} />
    }
    return (
        <Outlet />
    )
}