import { lazy } from 'react';
const App = lazy(() => import('../pages/private/App.jsx'))
const Index = lazy(() => import('../pages/private/Index.jsx'))
const Champions = lazy(() => import('../pages/private/Champions.jsx'))
const Champion = lazy(() => import('../pages/private/Champion.jsx'))
const Authentification = lazy(() => import('../pages/public/Authentification.jsx'))
const PublicLayout = lazy(() => import('../pages/public/PublicLayout.jsx'))
const SummonerProfile = lazy(() => import('../pages/private/profile/SummonerProfile.jsx'))
const History = lazy(() => import('../pages/private/profile/History.jsx'))
const Stats = lazy(() => import('../pages/private/profile/Stats.jsx'))
const Page404 = lazy(() => import('../pages/404.jsx'));
const Loading = lazy(() => import('../pages/Loading.jsx'));
const Qualifying = lazy(() => import('../pages/private/profile/Qualifying.jsx'));
export {
    App,
    Index,
    Champions,
    Champion,
    Authentification,
    PublicLayout,
    SummonerProfile,
    History,
    Stats,
    Page404,
    Loading,
    Qualifying
}