import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useStore } from '../../context/Store.ctx';

function App() {
  const { userName } = useStore()

  if (!userName) {
    return <Navigate to="/authentification" replace={true} />
  }

  return (
    <Outlet />
  )
}

export default App
