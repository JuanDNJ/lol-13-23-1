import { lazy } from 'react';
const App = lazy(() => import('../pages/private/App.jsx'))
const Index = lazy(() => import('../pages/private/Index.jsx'))
const Champions = lazy(() => import('../pages/private/Champions.jsx'))
const Champion = lazy(() => import('../pages/private/Champion.jsx'))
const Authentification = lazy(() => import('../pages/public/Authentification.jsx'))
const PublicLayout = lazy(() => import('../pages/public/PublicLayout.jsx'))
export {
    App,
    Index,
    Champions,
    Champion,
    Authentification,
    PublicLayout
}