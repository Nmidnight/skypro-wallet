import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { MainPage } from '../pages/MainPage';
import { SigninPage } from '../pages/SigninPage';
import { SignupPage } from '../pages/SignupPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AnalysisPage } from '../pages/AnalysisPage';
import { useState } from 'react';
import { PrivateRoute } from './PrivateRoutes';

export function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false);


    return (
        <Routes>
            <Route path="/signin" element={<SigninPage setIsAuth={setIsAuth} />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="analysis" element={<AnalysisPage />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
