import { Routes, Route, NavLink } from 'react-router';
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


function App() {
  return (
    <>

      {/* You can comment out if it is hinder  */}
      {/* <div style={{position:'fixed', bottom:'20px', left:'10px', display:'flex', gap:'20px'}}>
        <NavLink to="/signin">Sign In Page</NavLink>
        <NavLink to="/signup">Sign Up Page</NavLink>
        <NavLink to="/dashboard">Dashboard Page</NavLink>
        <NavLink to="/entry">Entry Page</NavLink>
        <NavLink to="/journal">Journal Page</NavLink>
        <NavLink to="/getstartedpage">GetStarted Page</NavLink>
      </div> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/entry" element={<EntryPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/privacy-settings" element={<PrivacyPage />} />
          <Route path="/reminder" element={<ReminderPage />} />
          <Route path="/delete-account" element={<DeletePage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/journal" element ={<JournalPage/>}/>
        </Routes>

    
        <div style={{ position: 'fixed', bottom: '20px', left: '10px', display: 'flex', gap: '20px' }}>
          <NavLink to="/signin">Sign In Page</NavLink>
          <NavLink to="/signup">Sign Up Page</NavLink>
          <NavLink to="/dashboard">Dashboard Page</NavLink>
          <NavLink to="/journal">Journal Entry Page</NavLink>
        </div>
    </>
  );
}

export default App;