import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';

function Layout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (state?.auth?.userInfo?.role) {
    return (
      <>
        <Header />
        <Outlet />
        <Navbar />
      </>
    );
  } else {
    return <Outlet />;
  }
}
export default Layout;
