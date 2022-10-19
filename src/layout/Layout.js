import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

function Layout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (state?.auth?.userInfo?.role) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <Navbar />
      </>
    );
  } else {
    return <Outlet />;
  }
}
export default Layout;
