import { Outlet } from 'react-router-dom';
import HeaderWhosLikeMe from './HeaderWhosLikeMe';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';

function Layout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  if (state?.auth?.userInfo?.role === 'goldmember') {
    return (
      <>
        <Container>
          <HeaderWhosLikeMe />
          <Outlet />
        </Container>
      </>
    );
  }
}
export default Layout;
