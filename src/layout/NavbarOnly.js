import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

function NavbarOnly() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (state?.auth?.userInfo?.role) {
    return (
      <>
        <Outlet />
        <Footer />
        <Navbar />
      </>
    );
  } else {
    return <Outlet />;
  }
}
export default NavbarOnly;
