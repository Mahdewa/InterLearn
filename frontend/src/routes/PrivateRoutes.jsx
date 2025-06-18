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
import ProfilePagePengajar from '../pages/private/settings/ProfilePagePengajar';
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
            // Route Student
            <Route path="/dashboard/user/home" element={<DashboardPage />} />
            <Route path="/dashboard/user/detailcontent" element={<DetailContent />} />
            <Route path="/dashboard/user/mycourses/Inprogressnone" element={<InprogressNone />} />
            <Route path="/dashboard/user/mycourses/Completednone" element={<CompletedNone />} />
            <Route path="/dashboard/user/mycourses" element={<Inprogress />} />
            <Route path="/dashboard/workshop/learningquiz" element={<LearningQuizPage />} />
            <Route path="/dashboard/workshop/learningstartquiz" element={<LearningStartQuizPage />} />
            <Route path="/dashboard/mycourses/learningafterquiz" element={<LearningafterQuizPage />} />
            <Route path="/dashboard/workshop/learningviewdetail" element={<LearningViewQuizPage />} />
            <Route path="/dashboard/user/raport" element={<RaportPage />} />
            <Route path="/dashboard/user/mycourses/learningsectioncoment" element={<LearningSectionComentcomponent />} />
            <Route path="/dashboard/user/mycourses/learningsectionvideo/:course_id" element={<LearningSectionVideocomponent />} />
            <Route path="/dashboard/user/setting" element={<ProfilePage />} />

            //Route Lecturer
            <Route path="/dashboard/lecturer/home" element={<PengajarDashboardPage />} />
            <Route path="/dashboard/lecturer/mycourses" element={<AddCourse />} />
            <Route path="/dashboard/lecturer/raport" element={<AddRapot />} />
            <Route path="/dashboard/lecturer/detailcontent" element={<DetailContent />} />
            <Route path="/dashboard/lecturer/setting" element={<ProfilePagePengajar />} />


            {/* <Route path="/dashboard/setting" element={<ProfilePage />} />
            <Route path="/dashboard/setting/notifications" element={<NotificationsPage />} />
            <Route path="/dashboard/setting/sociallinks" element={<SocialLinksPage />} /> */}
        </Routes>
    );
};

export default PrivateRoutes;
