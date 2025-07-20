import React, { useState, useEffect } from 'react'
import hourglassUrl from '../../assets/images/hourglass.svg'
import googleUrl    from '../../assets/images/google.svg'
import logoUrl      from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader/Loader'
import { loginData } from '../../store/modalstore'

export default function SignInPage() {

  // getting the slice of the state
  const newToken = loginData((state)=>state.updateToken);
  const newRole = loginData((state)=>state.updateRole);

  // 1️⃣ track window width & determine device
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const device = width >= 1024
    ? 'desktop'
    : width >= 640
      ? 'tablet'
      : 'mobile'

      const navigate = useNavigate();
      
  // 2️⃣ form state & validation
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [stay, setStay]         = useState(false)
  const [errors, setErrors]     = useState({})
  const [loader, setLoader] = useState(false)
  const validate = () => {
    const e = {}
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Invalid email'
    if (password.length < 6)          e.password = 'Must be ≥6 chars'
    setErrors(e)
    return Object.keys(e).length === 0
  }
  const handleSubmit = ev => {
    ev.preventDefault()
    if (validate()) {
      console.log({ email, password, stay })
      const data = {email, password}
      // TODO: call your auth API...
      setLoader(true)        
      axios.post('http://135.119.224.168:8000/api/v1/Authentication',
            data, {
            headers:{
                "Accept":"*/*",
                "Content-Type":'application/json'
            }
        }).then((res) => {
            if(res.status == 200){
                toast.success("Login successful!");
                // save it in the store
                console.log("Login Success: ", res.data.data)
                newRole(res.data.data.role)
                newToken(res.data.data.token)
                setTimeout(() => {
                    navigate('/dashboard')
                }, 3000)
            }
        }).catch((err) => {
            console.log("The Error: ", err)
            toast.error(err.message || "Login failed.");
        }).finally(() => {
            setLoader(false)
        })
      
    }
  }

  // 3️⃣ responsive helper values
  const heroFontSize = device === 'desktop' ? '2.5rem' : device === 'tablet' ? '2.25rem' : '2rem'
  const subFontSize  = device === 'desktop' ? '1.2rem' : device === 'tablet' ? '1.1rem' : '1rem'
  const panelPadding = device === 'desktop' ? '3rem'   : device === 'tablet' ? '2rem'   : '1.5rem'
  const panelWidth   = device === 'desktop' ? '50%'     : '100%'
  const logoWidth    = device === 'desktop' ? '150px'   : device === 'tablet' ? '130px' : '120px'

  // 4️⃣ style object
  const S = {
    page: {
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif'",
      overflowX: 'hidden',
    },
    left: {
      flex: 1,
      width: panelWidth,
      padding: panelPadding,
      background: '#D4D6D9',
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    right: {
      flex: 1,
      width: panelWidth,
      padding: panelPadding,
      background: '#1A3467',
      color: '#fff',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    logoImage: {
      width: logoWidth,
      height: 'auto',
      marginBottom: '2rem',
    },
    hero: {
      fontSize: heroFontSize,
      fontWeight: '700',
      margin: 0,
    },
    sub: {
      fontSize: subFontSize,
      margin: '1rem 0 2rem 0',
      color: device === 'desktop' ? '#f0f0f0' : '#555',
    },
    group: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.25rem',
      fontWeight: '500',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: device === 'desktop' ? '1rem' : device === 'tablet' ? '0.75rem' : '0.65rem',
      borderRadius: '999px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      color: '#333',
    },
    btn: {
      width: '100%',
      borderRadius: '999px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
    },
    primary: {
      background: '#203864',
      color: '#fff',
      padding: device === 'desktop' ? '0.75rem' : device === 'tablet' ? '0.65rem' : '0.6rem',
    },
    secondary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: device === 'desktop' ? '0.5rem' : device === 'tablet' ? '0.4rem' : '0.3rem',
      background: '#fff',
      color: '#000',
      border: '1px solid #888',
      padding: device === 'desktop' ? '0.75rem' : device === 'tablet' ? '0.65rem' : '0.6rem',
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    imgBg: {
      position: 'absolute',
      inset: 0,
      margin: 'auto',
      width: '100%',
      height: 'auto',
      opacity: 0.1,
    },
    quote: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      fontStyle: 'italic',
      fontSize: '0.85rem',
    },
    welcomeContent: {
      position: 'absolute',
      top: device === 'desktop' ? '20%' : device === 'tablet' ? '18%' : '15%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: device === 'desktop' ? '453px' : device === 'tablet' ? '360px' : '280px',
      height: device === 'desktop' ? '175px' : device === 'tablet' ? '140px' : '110px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '11px',
      zIndex: 2,
    },
    welcomeTitle: {
      fontSize: heroFontSize,
      fontWeight: 'bold',
      color: '#fff',
      margin: 0,
    },
    welcomeSub: {
      fontSize: subFontSize,
      fontWeight: '300',
      margin: 0,
      color: '#f0f0f0',
    },
    error: {
      color: 'crimson',
      fontSize: '0.8rem',
      marginTop: '0.25rem',
    },
  }

  return (
    <div style={S.page}>
      {/* LEFT PANEL */}
      <div style={S.left} className="sign-in-container">
        <img
          src={logoUrl}
          alt="MindfulSpace logo"
          style={S.logoImage}
          className="brand-logo"
        />
        <h2 style={S.hero} className="hero-title">Welcome Back!</h2>
        <p style={S.sub} className="hero-subtitle">
          Fill in the details, let’s do some catching up.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div style={S.group} className="form-group-email">
            <label htmlFor="email" style={S.label}>
              Email Address <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              style={S.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && <div style={S.error}>{errors.email}</div>}
          </div>

          <div style={S.group} className="form-group-password">
            <label htmlFor="password" style={S.label}>
              Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              style={S.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && <div style={S.error}>{errors.password}</div>}
          </div>

          <div style={{ textAlign: 'right', marginTop: '0.25rem' }}>
            <a href="#" style={{ color: '#1B355E', fontSize: '0.9rem', textDecoration: 'none' }}>
              Forgot password?
            </a>
          </div>

          <div style={S.checkbox} className="stay-logged-in">
            <div
              onClick={() => setStay(!stay)}
              style={{
                width: '40px',
                height: '20px',
                borderRadius: '10px',
                background: stay ? '#203864' : '#ccc',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '9px',
                  background: '#fff',
                  position: 'absolute',
                  top: '1px',
                  left: stay ? '20px' : '1px',
                  transition: 'left 0.2s',
                }}
              />
            </div>
            <span style={{ marginLeft: '0.75rem', color: '#333' }}>Stay logged in</span>
          </div>

          <button type="submit" style={{ ...S.btn, ...S.primary }} className="btn-login">
            <span style={{marginRight:'10px'}}>Log in</span>
            {loader && <Loader />}
          </button>

          <button
            type="button"
            onClick={() => alert('Google OAuth')}
            style={{ ...S.btn, ...S.secondary }}
            className="btn-google-login"
          >
            <img src={googleUrl} alt="Google logo" width={20} height={20} />
            Continue with Google
          </button>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.95rem' }}>
            <span style={{ color: '#000' }}>Don’t have an account? </span>
            <span
              onClick={() => navigate('/signup')}
              style={{color: '#1B355E', fontWeight:  600, textDecoration: 'none', cursor: 'pointer' }}
            >
              Sign up
            </span>
          </div>
        </form>
      </div>

      {/* RIGHT PANEL */}
      <div style={S.right} className="welcome-panel">
        <div style={S.welcomeContent}>
          <h2 style={S.welcomeTitle} className="welcome-title">
            Welcome to <br /> MindfulSpace
          </h2>
          <p style={S.welcomeSub} className="welcome-sub">
            Your safe space to heal, grow and thrive
          </p>
        </div>

        <img src={hourglassUrl} alt="" style={S.imgBg} />

        <blockquote style={S.quote} className="quote">
          “Breathe in peace. Breathe out pressure.”<br />
          <span>— Anonymous</span>
        </blockquote>
      </div>
    </div>
  )
}