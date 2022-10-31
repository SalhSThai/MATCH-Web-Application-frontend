import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import LayoutWhosLikeMe from './layout/layoutForGoldmember/LayoutWhosLikeMe';
import AdminPage from './pages/AdminPage';
import SwipePage from './pages/SwipePage';
import WelcomePage from './pages/WelcomePage';
import { online, thunkRemember } from './redux/Slice/AuthSlice';
import { getAccessToken } from './utils/localStorage';
import WhosLikeMePage from './pages/WhosLikeMePage';
import UserLikedPage from './pages/UserLikedPage';
import ExplorePage from './pages/ExplorePage';
import UserProfilePage from './pages/UserProfilePage';
import InterestPage from './pages/InterestPage';
import AddPhotoOnRegisPage from './pages/AddPhotoOnRegisPage';
import MessagePage2 from './pages/MessagePage2';
import UserPostPage from './pages/UserPostPage';
import SeeYourProfilePage from './pages/SeeYourProfilePage';
import AlertMatchPage from './pages/AlertMatchPage';
import NavbarOnly from './layout/NavbarOnly';
import NearMePage from './pages/NearMePage';
import socket from './config/socket';
import { thunkUpdateLocation } from './redux/Slice/LocationSlice';

function App() {
  const { role, id } = useSelector((state) => state?.auth?.userInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('remember');
    getAccessToken() && dispatch(thunkRemember());
  }, []);

  useEffect(() => {
    // socketRef.current = socket

  }, [])

  useEffect(() => {
    if (id) {
      socket.connect();
      socket.auth = { id }
      console.log('connect');

      socket.on('connect', () => {
        dispatch(online(true))
      });
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('latitude: ', latitude, 'longitude: ', longitude);
        dispatch(thunkUpdateLocation({ latitude, longitude }));
      }, () => null

    );

    return () => {
      console.log('disconnect');
      socket.disconnect();
      dispatch(online(false));
    }
  }, [id,socket])

  if (role === 'member') {
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<SwipePage />} />
          <Route path='/post' element={<UserPostPage />} />
          <Route path='/seepost/:id' element={<SeeYourProfilePage />} />
          <Route path='/interest' element={<InterestPage />} />
          <Route path='/addphoto' element={<AddPhotoOnRegisPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/userprofile' element={<UserProfilePage />} />
          <Route path='/matching' element={<AlertMatchPage />} />
          <Route path='/likeyou' element={<WhosLikeMePage />} />
        </Route>
        <Route path='/' element={<NavbarOnly />}>
          <Route path='/nearme' element={<NearMePage />} />
          <Route path='/message' element={<MessagePage2 />} />

        </Route>
      </Routes>
    );
  }
  if (role === 'goldmember') {
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<SwipePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/interest' element={<InterestPage />} />
          <Route path='/userprofile' element={<UserProfilePage />} />
          <Route path='/post' element={<UserPostPage />} />
          <Route path='/seepost/:id' element={<SeeYourProfilePage />} />
          <Route path='/addphoto' element={<AddPhotoOnRegisPage />} />
          <Route path='/matching' element={<AlertMatchPage />} />

          <Route path='/' element={<LayoutWhosLikeMe />}>
            <Route path='/likeyou' element={<WhosLikeMePage />} />
            <Route path='/youlike' element={<UserLikedPage />} />
          </Route>
          <Route path='/' element={<NavbarOnly />}>
            <Route path='/nearme' element={<NearMePage />} />
            <Route path='/message' element={<MessagePage2 />} />
          </Route>
        </Route>
      </Routes>
    );
  }
  if (role === 'admin') {
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<AdminPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<WelcomePage />} />
          <Route path='*' element={<WelcomePage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
