import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
