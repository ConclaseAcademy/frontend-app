import { Routes, Route, NavLink } from 'react-router';
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      

      {/* You can comment out if it is hinder  */}
      <div style={{position:'fixed', bottom:'20px', left:'10px', display:'flex', gap:'20px'}}>
        <NavLink to="/signin">Sign In Page</NavLink>
        <NavLink to="/signup">Sign Up Page</NavLink>
      </div>
    </>
  );
}

export default App;
