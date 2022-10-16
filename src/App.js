import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<WelcomePage />} />

        <Route path='*' element={<WelcomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
