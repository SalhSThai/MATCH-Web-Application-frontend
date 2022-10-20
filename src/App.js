import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import LayoutWhosLikeMe from './layout/layoutForGoldmember/LayoutWhosLikeMe';
import AdminPage from './pages/AdminPage';
import SwipePage from './pages/SwipePage';
import WelcomePage from './pages/WelcomePage';
import ChatAppPage from './pages/ChatAppPage';

import { thunkRemember } from './redux/Slice/AuthSlice';
import { getAccessToken } from './utils/localStorage';
import WhosLikeMePage from './pages/WhosLikeMePage';
import UserLikedPage from './pages/UserLikedPage';
import ExplorePage from './pages/ExplorePage';
import UserProfilePage from './pages/UserProfilePage';
import InterestPage from './pages/InterestPage';
import AddPhotoOnRegisPage from './pages/AddPhotoOnRegisPage';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('remmember');
    getAccessToken() && dispatch(thunkRemember());
  }, []);

  console.log(state?.auth?.userInfo?.role);
  if (state?.auth?.userInfo?.role === 'member') {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SwipePage />} />
          <Route path="/chatapp" element={<ChatAppPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/addphoto" element={<AddPhotoOnRegisPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
        </Route>
      </Routes>
    );
  }
  if (state?.auth?.userInfo?.role === 'goldmember') {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SwipePage />} />
          <Route path="/chatapp" element={<ChatAppPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />

          <Route path="/" element={<LayoutWhosLikeMe />}>
            <Route path="/likeyou" element={<WhosLikeMePage />} />
            <Route path="/youlike" element={<UserLikedPage />} />
          </Route>
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
