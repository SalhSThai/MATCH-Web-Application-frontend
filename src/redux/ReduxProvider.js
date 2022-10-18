import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {store} from './index';
import moduleName, { getAccessToken } from '../utils/localStorage';
import { thunkRemember } from './Slice/AuthSlice';


export default function ({ children }) {



  return (
    <Provider store={store}>{children}</Provider>
  )
}
