import './App.css';
import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
import MaritanRation from './components/maritanRation'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MaritanRation />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
