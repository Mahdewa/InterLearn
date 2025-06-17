import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import PengajarDashboardPage from '../pages/private/PengajarDashboardPage';
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
import RaportPage from '../pages/private/RaportPage';
import LearningSectionComentcomponent from '../pages/private/mycourses/learningSectionComent';
import LearningSectionVideocomponent from '../pages/private/mycourses/learningSectionVideo';
import AddCourse from '../pages/private/pengajar/AddCourses';
import AddRapot from '../pages/private/pengajar/AddRapot';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/home/user" element={<DashboardPage />} />
            <Route path="/dashboard/lecturer/home" element={<PengajarDashboardPage />} />
            <Route path="/dashboard/lecturer/mycourses" element={<AddCourse />} />
            <Route path="/dashboard/lecturer/raport" element={<AddRapot />} />
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
            <Route path="/dashboard/raport" element={<RaportPage />} />
            <Route path="/dashboard/mycourses/learningsectioncoment" element={<LearningSectionComentcomponent />} />
            <Route path="/dashboard/mycourses/learningsectionvideo/:course_id" element={<LearningSectionVideocomponent />} />
        </Routes>
    );
};

export default PrivateRoutes;
