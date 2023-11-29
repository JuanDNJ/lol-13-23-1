import { lazy } from 'react';
const App = lazy(() => import('../pages/App.jsx'))
const Index = lazy(() => import('../pages/Index.jsx'))
const Champions = lazy(() => import('../pages/Champions.jsx'))
const Champion = lazy(() => import('../pages/Champion.jsx'))
export {
    App,
    Index,
    Champions,
    Champion
}