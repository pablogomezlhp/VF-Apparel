import React from 'react'

import {Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { Plp } from './pages/Plp';

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Plp />}/>
            </Route>
        </Routes>
    );
}