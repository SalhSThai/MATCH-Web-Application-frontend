import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {store} from './index';
import { getAccessToken } from '../utils/localStorage';
import { thunkRemember } from './Slice/AuthSlice';


export default function ({ children }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    getAccessToken() && dispatch(thunkRemember(getAccessToken()));

  },[])



  return (
    <Provider store={store}>{children}</Provider>
  )
}
