import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import OnFirstTimeLoader from './components/OFirstTimeLoader/onFirstTimeLoader';
// import App from './App.jsx'
const App = React.lazy(() => import('./App'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<OnFirstTimeLoader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
