import NavbarPengajar from '../../components/private/Shared/NavbarPengajar';
import Recently from '../../components/private/DashboardPage/Recently';
import Trending from '../../components/private/DashboardPage/Trending';
import Personalized from '../../components/private/DashboardPage/Personalized';
import Courses from '../../components/private/DashboardPage/Courses';
import Footer from '../../components/public/shared/Footer';

const DashboardPage = () => {
    return (
        <div>
            <NavbarPengajar />
            <Recently />
            <Trending />
            <Personalized />
            <Courses />
            <Footer />
        </div>
    )
}
export default DashboardPage;