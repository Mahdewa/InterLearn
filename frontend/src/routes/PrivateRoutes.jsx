import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import DetailContent from '../pages/private/DetailContent';
import InprogressNone from '../pages/private/mycourses/Inprogressnone';
import CompletedNone from '../pages/private/mycourses/completednone';
import Inprogress from '../pages/private/mycourses/Inprogress';
import LearningQuizPage from '../pages/private/mycourses/learningquiz';
import LearningStartQuizPage from '../pages/private/mycourses/learningstartquiz';
import LearningafterQuizPage from '../pages/private/mycourses/learningafterquiz';
import LearningViewQuizPage from '../pages/private/mycourses/learningviewdetail';
import ProfilePage from '../pages/private/settings/ProfilePage';
import NotificationsPage from '../pages/private/settings/NotificationsPage';
import SocialLinksPage from '../pages/private/settings/SocialLinksPage';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<DashboardPage />} />
            <Route path="/dashboard/detailcontent" element={<DetailContent />} />
            <Route path="/dashboard/mycourses/Inprogressnone" element={<InprogressNone />} />
            <Route path="/dashboard/mycourses/Completednone" element={<CompletedNone />} />
            <Route path="/dashboard/mycourses" element={<Inprogress />} />
            <Route path="/dashboard/workshop/learningquiz" element={<LearningQuizPage />} />
            <Route path="/dashboard/workshop/learningstartquiz" element={<LearningStartQuizPage />} />
            <Route path="/dashboard/mycourses/learningafterquiz" element={<LearningafterQuizPage />} />
            <Route path="/dashboard/workshop/learningviewdetail" element={<LearningViewQuizPage />} />
            <Route path="/dashboard/setting" element={<ProfilePage />} />
            <Route path="/dashboard/setting/notifications" element={<NotificationsPage />} />
            <Route path="/dashboard/setting/sociallinks" element={<SocialLinksPage />} />
        </Routes>
    );
};

export default PrivateRoutes;
