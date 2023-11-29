import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { App, Index, Champions, Champion, Authentification, PublicLayout } from './load';
import StoreCtx from '@/context/Store.ctx'

const RoutesOne = () => {

    return (

        <Suspense fallback={<h1>Loading ...</h1>}>
            <BrowserRouter>
                <StoreCtx>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Index />} />
                            <Route path="/champions" element={<Champions />} />
                            <Route path="/champion/:key" element={<Champion />} />
                            <Route path="*" element={<h1>404 Page not found</h1>} />
                        </Route>
                        <Route path="/" element={<PublicLayout />}>
                            <Route path="authentification" element={<Authentification />} />
                            <Route path="*" element={<h1>404 Page not found</h1>} />
                        </Route>
                    </Routes>
                </StoreCtx>
            </BrowserRouter>
        </Suspense>

    )
}

export default RoutesOne;