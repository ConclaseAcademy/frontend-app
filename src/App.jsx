import { Routes, Route, NavLink } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import JournalEntryPage from './pages/JournalEntryPage/JournalEntryPage';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/journal" element={<JournalEntryPage />} />
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