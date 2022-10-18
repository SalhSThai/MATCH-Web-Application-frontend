import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import AdminPage from './pages/AdminPage';
import ChatAppPage from './pages/ChatAppPage';
import GoldMemberPage from './pages/GoldMemberPage';
import SwipePage from './pages/SwipePage';
import WelcomePage from './pages/WelcomePage';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  if (state?.auth?.userInfo?.role === 'member') {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SwipePage />} />
          <Route path="/chatapp" element={<ChatAppPage />} /> 

        </Route>
      </Routes>
    );
  }
  if (state?.auth?.userInfo?.role === 'admin') {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AdminPage />} />
        </Route>
      </Routes>
    );
  }
  if (state?.auth?.userInfo?.role === 'goldmember') {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SwipePage />} />
          <Route path="/likeyou" elemet={<GoldMemberPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
