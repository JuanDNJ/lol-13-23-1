import { Outlet } from 'react-router-dom'
import StoreCtx from '../context/Store.ctx'
import MainMenu from '../components/MainMenu'
function App() {
  return (
    <StoreCtx>
      <MainMenu />
      <Outlet />
    </StoreCtx>
  )
}

export default App
