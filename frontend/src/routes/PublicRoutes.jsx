import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import VerificationCodePage from '../pages/public/VerificationCodePage';
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/VerificationPage" element={<VerificationCodePage />} />
        </Routes>
    );
};

export default PublicRoutes;