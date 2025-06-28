
import React, { useState } from 'react'
import hourglassUrl from '../../assets/images/hourglass.svg'
import googleUrl    from '../../assets/images/google.svg'
import logoUrl from '../../assets/images/logo.svg';

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [stay, setStay] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Invalid email'
    if (password.length < 6) e.password = 'Must be ≥6 chars'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    if (validate()) {
      console.log({ email, password, stay })
     
    }
  }

  const S = {
    page:    { display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' },
    left:    { flex: 1, padding: '3rem', background: '#D4D6D9', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    right:   { flex: 1, padding: '3rem', background: '#1B355E', color: '#fff', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    logo:    { display: 'flex', alignItems: 'center', marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 600, color: '#F3F0E2' },
    hero:    { fontSize: '2.5rem', fontWeight: '700', margin: 0 },
    sub:     { margin: '1rem 0 2rem 0', color: '#555' },
    group:   { marginBottom: '1rem' },
    label:   { display: 'block', marginBottom: '0.25rem', fontWeight: '500', color:'#333'},
    input:   { width: '100%', padding: '1rem', borderRadius: '999px', border: '1px solid #ccc', fontSize: '1rem', color: '#333', '::placeholder': { color: '#A1A1A1' } },
    btn:     { width: '100%', padding: '0.75rem', borderRadius: '999px', fontSize: '1rem', fontWeight: '600', border: 'none', cursor: 'pointer' },
    primary: { background: '#203864', color: '#fff', marginTop: '1rem' },
    secondary:{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#fff', color: '#000', border: '1px solid #888', marginTop: '0.5rem' },
    checkbox:{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#333' },
    imgBg:   { position: 'absolute', inset: 0, margin: 'auto', width: '75%', opacity: 0.1 },
    quote:   { position: 'absolute', bottom: '1rem', right: '1rem', fontStyle: 'italic', fontSize: '0.85rem' },
    error:   { color: 'crimson', fontSize: '0.8rem', marginTop: '0.25rem' },
  }

  return (
    <div style={S.page}>
      <div style={S.left} className="sign-in-container">
        <h1 style={S.logo}      className="hero-title">MindfulSpace</h1>
        <h2 style={S.hero}      className="hero-title">Welcome Back!</h2>
        <p  style={S.sub}       className="hero-subtitle">Fill in the details, let’s do some catching up.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div style={S.group} className="form-group-email">
          <label htmlFor="email"> Email Address <span style={{ color: 'red' }}>*</span>
</label>
            <input
              id="email" type="email" placeholder="Enter your email"
              style={S.input} value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && <div style={S.error}>{errors.email}</div>}
          </div>

          <div style={S.group} className="form-group-password">
          <label htmlFor="password"> Password <span style={{ color: 'red' }}>*</span>
</label>
            <input
              id="password" type="password" placeholder="Enter your password"
              style={S.input} value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && <div style={S.error}>{errors.password}</div>}
          </div>

          <div style={{ textAlign: 'right', marginTop: '0.25rem' }}>
  <a href="#" style={{ color: '#1B355E', fontSize: '0.9rem', textDecoration: 'none' }}>
    Forgot password?
  </a>
</div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }} className="stay-logged-in">
   <div
     onClick={() => setStay(!stay)}
     style={{
       width: '40px',
       height: '20px',
       borderRadius: '10px',
       background: stay ? '#203864' : '#ccc',
       position: 'relative',
       cursor: 'pointer',
       transition: 'background 0.2s'
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
         transition: 'left 0.2s'
       }}
     />

     
   </div>
   <span style={{ marginLeft: '0.75rem', color: '#333' }}>Stay logged in</span>
 </div>
          <button type="submit" style={{ ...S.btn, ...S.primary }} className="btn-login">
            Log in
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
  <a href="#" style={{ color: '#1B355E', fontWeight: 600, textDecoration: 'none' }}>
    Sign Up
  </a>
</div>
        </form>
      </div>

      <div style={S.right} className="welcome-panel">
        <h2 className="welcome-title">Welcome to MindfulSpace</h2>
        <p className="welcome-sub">Your safe space to heal, grow and thrive</p>
        <img src={hourglassUrl} alt="" style={S.imgBg} />
        <blockquote style={S.quote} className="quote">
          “Breathe in peace. Breathe out pressure.”<br/>
          <span>— Anonymous</span>
        </blockquote>
      </div>
    </div>
  )
}