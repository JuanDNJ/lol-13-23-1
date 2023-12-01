import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { App, Index, Champions, Champion, Authentification, PublicLayout, SummonerProfile, History, Stats, Page404, Loading, Qualifying } from './load';
import StoreCtx from '@/context/Store.ctx'


const RoutesOne = () => {

    return (

        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <StoreCtx>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Index />} />
                            <Route path="/champions" element={<Champions />} />
                            <Route path="/champion/:key" element={<Champion />} />
                            <Route path="/profile" element={<SummonerProfile />}>
                                <Route index element={<History />} />
                                <Route index path="history" element={<History />} />
                                <Route path="stats" element={<Stats />} />
                                <Route path="qualifying" element={<Qualifying />} />
                            </Route>
                            <Route path="*" element={<Page404 />} />
                        </Route>
                        <Route path="/" element={<PublicLayout />}>
                            <Route path="authentification" element={<Authentification />} />
                            <Route path="*" element={<Page404 />} />
                        </Route>
                    </Routes>
                </StoreCtx>
            </BrowserRouter>
        </Suspense>

    )
}

export default RoutesOne;