import { Routes, Route, NavLink } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import EntryPage from './pages/EntryPage/EntryPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import ReminderPage from './pages/ReminderPage/ReminderPage';
import DeletePage from './pages/DeleteAccount/DeleteAccount';
import MeditationPage from './pages/MeditationPage/MeditationPage';
import JournalPage from './pages/JournalPage/JournalPage';
import MainDashboard from './pages/DashboardPage/components/MainDashboard/MainDashboard';
import MoodTrackerPage from './pages/MoodTrackerPage/MoodTrackerPage';
import GetStartedPage from './pages/getstartedpage/getstartedpage';
import GetStartedPage2 from './pages/getstartedpage/getstartedpage2';
import { loginData } from './store/modalstore';
import { isTokenExpired } from './components/isTokenExpired/isTokenExpired';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';


function App() {

  const token = loginData((state) => state.token);
  const updateToken = loginData((state) => state.updateToken);
  const updateRole = loginData((state) => state.updateRole)

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      // Logout user
      updateToken('');
      updateRole('');
      // sessionStorage.clear();
      window.location.href = '/signin'; // or use navigate
    }
  }, [token]);

  return (
    <>

      {/* Your routes/components */}
      <ToastContainer position="bottom-left" autoClose={3000} style={{zIndex:10}} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/entry" element={<ProtectedRoute><EntryPage /></ProtectedRoute>} />
          <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} >
            <Route index element={<MainDashboard />} />
            <Route path='mood' element={<MoodTrackerPage />} />
          </Route>
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/privacy-settings" element={<ProtectedRoute><PrivacyPage /></ProtectedRoute>} />
          <Route path="/reminder" element={<ProtectedRoute><ReminderPage /></ProtectedRoute>} />
          <Route path="/delete-account" element={<ProtectedRoute><DeletePage /></ProtectedRoute>} />
          <Route path="/meditation" element={<ProtectedRoute><MeditationPage /></ProtectedRoute>} />
          <Route path="/journal" element ={<ProtectedRoute><JournalPage/></ProtectedRoute>}/>
          <Route path="/getstarted" element ={<ProtectedRoute><GetStartedPage/></ProtectedRoute>}/>
          <Route path="/getstarted2" element ={<ProtectedRoute><GetStartedPage2/></ProtectedRoute>}/>
        </Routes>

    
        <div 
        style={{ position: 'fixed', bottom: '20px', 
        right: '10px', display: 'flex', padding:'20px',
        flexDirection:'column',
        gap: '20px', background:'whitesmoke' }}>
          <NavLink to="/">Landing Page</NavLink>
          <NavLink to="/signin">Sign In Page</NavLink>
          <NavLink to="/signup">Sign Up Page</NavLink>
          <NavLink to="/dashboard">Dashboard Page</NavLink>
          <NavLink to="/journal">Journal Page</NavLink>
          <NavLink to="/entry">Entry Page</NavLink>
          <NavLink to="/profile">Profile Page</NavLink>
          <NavLink to="/meditation">Meditation Page</NavLink>
          <NavLink to="/getstarted">GetStarted Page</NavLink>
          <NavLink to="/getstarted2">GetStarted 2 Page</NavLink>
        </div>
    </>
  );
}

export default App;