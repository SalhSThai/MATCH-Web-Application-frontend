import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />


        
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
