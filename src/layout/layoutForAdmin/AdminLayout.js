import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AdminContainer from './AdminContainer';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';

function AdminLayout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (state?.auth?.userInfo?.role === 'admin') {
    return (
      <AdminContainer>
        <AdminHeader />
        <div className='grow flex overflow-y-scroll relative'>
          <AdminNavbar />
          <div className='grow h-full py-5 px-10'>
            <Outlet />
          </div>
        </div>
      </AdminContainer>
    );
  } else {
    return <Outlet />;
  }
}
export default AdminLayout;
