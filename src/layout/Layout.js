import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import ContainerComponent from '../styled-component/ContainerComponent';

function Layout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (state?.auth?.userInfo?.role) {
    return (
      <ContainerComponent>

        <Header />
        <Outlet />
        <Footer />
        <Navbar />
      </ContainerComponent>

    );
  } else {
    return <Outlet />;
  }
}
export default Layout;
