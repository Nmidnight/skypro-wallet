import { Routes, Route } from 'react-router-dom';
// подредактировал испорт файл и папка с большой буквы '../layout/layout' 
import { Layout } from '../Layout/Layout';
import { MainPage } from '../pages/MainPage';
import { SigninPage } from '../pages/SigninPage';
import { SignupPage } from '../pages/SignupPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AnalysisPage } from '../pages/AnalysisPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />

            {/* @TODO: вот тут начинаются приватные маршруты */}
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="analysis" element={<AnalysisPage />} />
            </Route>
        </Routes>
    );
}
