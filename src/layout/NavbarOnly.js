import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import ContainerComponent from '../styled-component/ContainerComponent';

function NavbarOnly() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (state?.auth?.userInfo?.role) {
    return (
      <ContainerComponent>

        <Outlet />
        <Footer />
        <Navbar />
      </ContainerComponent>

    );
  } else {
    return <Outlet />;
  }
}
export default NavbarOnly;
