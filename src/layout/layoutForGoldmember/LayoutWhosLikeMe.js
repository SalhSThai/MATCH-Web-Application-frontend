import { Outlet } from 'react-router-dom';
import HeaderWhosLikeMe from './HeaderWhosLikeMe';
import { useDispatch, useSelector } from 'react-redux';

function Layout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  if (state?.auth?.userInfo?.role === 'goldmember') {
    return (
      <>
        <HeaderWhosLikeMe />
        <Outlet />
      </>
    );
  }
}
export default Layout;
