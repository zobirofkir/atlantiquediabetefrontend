import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import store from './redux/store/store';
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </Provider>
  );
}

export default App;
