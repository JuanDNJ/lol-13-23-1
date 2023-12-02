import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useStore } from '../../context/Store.ctx';

function App() {
  const { summoner } = useStore()

  if (!summoner) {
    return <Navigate to="/authentification" replace={true} />
  }

  return (
    <section className="outlet">
      <Outlet />
    </section>
  )
}

export default App
