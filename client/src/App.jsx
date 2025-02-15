import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Dashboard from './pages/Dashboard/Dashboard';
import axiosInstance from './config/axiosInstance';
import { getCookie, removeCookie } from './utils/cookiesApis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logout } from './store/slices/authSlice';
 
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user); 

 
  const fetchUserData = async () => {
    try {
       const token = getCookie('authToken');
      if (token) {
        const res = await axiosInstance.get(`/user/verifyauth`);
        // console.log(res);

        dispatch(setUser(res?.data?.user)); 
      } else {
        dispatch(logout());
        navigate('/');
      }
    } catch (error) {
      dispatch(logout());
      removeCookie('authToken');

      if (error.response?.data?.expiredSession) {
        alert(error.response.data.message);
      }

      navigate('/login');
      console.log(error);
    }
  };
  // console.log(user)

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
