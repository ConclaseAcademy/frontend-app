import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import homeIcon     from '../../assets/images/home.svg'
import userIcon     from '../../assets/images/profile.svg'
import settingsIcon from '../../assets/images/settings.svg'
import clockIcon    from '../../assets/images/clock.svg'
import trashIcon    from '../../assets/images/delete.svg'
import AvatarIcon   from '../../assets/images/avatar.svg'
import logo         from '../../assets/images/logo.svg'

export default function ProfilePage() {
  // 1️⃣ Responsive breakpoint detection
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

  // 2️⃣ Form & UI state
  const [saved, setSaved] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const fileInputRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    fullName: '', username: '', email: '', phone: '', dob: '', gender: ''
  })

  // 3️⃣ Sidebar items
  const sidebarItems = [
    { key: 'profile', label: 'Profile Information', icon: AvatarIcon, path: '/profile' },
    { key: 'privacy', label: 'Privacy Settings',   icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder',           icon: clockIcon,    path: '/reminder' },
    { key: 'delete', label: 'Delete Account',       icon: trashIcon,    path: '/delete-account' },
  ]

  // 4️⃣ Handlers
  const labelInput = (label, placeholder, id) => (
    <div style={S.formGroup}>
      <label htmlFor={id} style={S.label}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={formData[id]}
        onChange={e => setFormData({ ...formData, [id]: e.target.value })}
        style={S.input}
        disabled={saved}
      />
    </div>
  )
  const handleReset = () => {
    setFormData({ fullName: '', username: '', email: '', phone: '', dob: '', gender: '' })
    setSaved(false)
  }

  // 5️⃣ Responsive constants
  const sidebarWidth   = device === 'desktop' ? 370 : device === 'tablet' ? 300 : '100%'
  const topbarPadding  = device === 'desktop' ? '0 75px' : '0 20px'
  const mainPadding    = device === 'desktop' ? '33px 45px' : '20px'
  const gridCols       = device === 'desktop' ? 'repeat(2, 1fr)' : '1fr'
  const gridGapCols    = device === 'desktop' ? 40 : 20
  const gridGapRows    = device === 'desktop' ? 20 : 15
  const alertWidth     = device === 'desktop' ? 951 : '100%'

  // 6️⃣ Build styles
  const S = {
    page: {
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#F5F7FA',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
    topbar: {
      width: '100%',
      height: 116,
      background: '#4A83B9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: topbarPadding,
      boxSizing: 'border-box',
    },
    topLeft: {
      display: 'flex',
      alignItems: 'center',
      width: device === 'desktop' ? 287 : 'auto',
      justifyContent: 'space-between',
    },
    icon: { width: 24, height: 24, cursor: 'pointer' },
    title: { fontSize: 20, fontWeight: 500, color: '#fff' },
    logoImage: { height: 48, objectFit: 'contain' },

    content: {
      display: 'flex',
      flexDirection: device === 'mobile' ? 'column' : 'row',
    },

    sidebar: {
      width: sidebarWidth,
      background: '#E6EBF3',
      paddingTop: 30,
      paddingLeft: 45,
      boxSizing: 'border-box',
    },
    sidebarItem: isActive => ({
      display: 'flex', alignItems: 'center', gap: 19,
      padding: '16px 24px', backgroundColor: isActive ? '#0E5CF9' : 'transparent',
      color: isActive ? '#fff' : '#000',
      width: device === 'desktop' ? 280 : '100%',
      height: 62, borderRadius: 8, fontWeight: 500, cursor: 'pointer',
      boxSizing: 'border-box',
    }),

    main: {
      flex: 1,
      padding: mainPadding,
      boxSizing: 'border-box',
    },
    alert: {
      width: alertWidth,
      maxWidth: '100%',
      height: 48,
      backgroundColor: '#319F43',
      color: '#fff',
      borderRadius: 10,
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 24,
      fontWeight: 500,
      boxSizing: 'border-box',
    },
    h1: { fontSize: 28, marginBottom: 24 },

    profileHeader: {
      display: 'flex',
      flexDirection: device === 'mobile' ? 'column' : 'row',
      alignItems: 'center',
      gap: 24,
      marginBottom: 40,
    },
    avatar: {
      width: device === 'mobile' ? 80 : 100,
      height: device === 'mobile' ? 80 : 100,
      borderRadius: '50%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      cursor: 'pointer',
    },
    avatarEdit: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#00000088',
      color: '#fff',
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    email: {
      color: '#555',
    },

    formGrid: {
      display: 'grid',
      gridTemplateColumns: gridCols,
      columnGap: gridGapCols,
      rowGap: gridGapRows,
      marginBottom: 80,
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    label: {
      fontSize: 14,
      color: '#333',
    },
    input: {
      width: '100%',
      height: 58,
      padding: 16,
      border: '2px solid #ccc',
      borderRadius: 12,
      fontSize: 14,
      fontFamily: 'Poppins',
      boxSizing: 'border-box',
    },

    buttonRow: {
      display: 'flex',
      flexDirection: device === 'mobile' ? 'column' : 'row',
      gap:  device === 'mobile' ? 20 : 34,
    },
    btnPrimary: {
      backgroundColor: '#1A3467',
      color: '#fff',
      width: device === 'mobile' ? '100%' : 226,
      height: 58,
      padding: '12px 24px',
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      fontFamily: 'Poppins',
    },
    btnSecondary: {
      backgroundColor: '#716B6B',
      color: '#fff',
      width: device === 'mobile' ? '100%' : 226,
      height: 58,
      padding: '12px 24px',
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      fontFamily: 'Poppins',
    },
  }

  return (
    <div style={S.page}>
      {/* Top Bar */}
      <div style={S.topbar}>
        <div style={S.topLeft}>
          <img
            src={homeIcon}
            alt="Home"
            style={S.icon}
            onClick={() => navigate('/dashboard')}
          />
          <div style={S.title}>Profile & Settings</div>
        </div>
        <img src={logo} alt="MindfulSpace" style={S.logoImage} />
        <div style={{ width: device === 'desktop' ? 287 : 'auto' }} />
      </div>

      {/* Content */}
      <div style={S.content}>
        {/* Sidebar */}
        <div style={S.sidebar}>
          {sidebarItems.map(({ key, label, icon, path }, i) => {
            const isActive = location.pathname === path
            return (
              <React.Fragment key={key}>
                <div
                  onClick={() => navigate(path)}
                  style={S.sidebarItem(isActive)}
                >
                  <img src={icon} width={24} height={24} alt="" />
                  <span>{label}</span>
                </div>
                {i < sidebarItems.length - 1 && (
                  <div
                    style={{
                      height: 1,
                      backgroundColor: '#ccc',
                      width: device === 'desktop' ? 280 : '100%',
                      margin: '8px 0',
                    }}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Main */}
        <div style={S.main}>
          {saved && <div style={S.alert}>All settings saved successfully!</div>}

          <h1 style={S.h1}>Profile Information</h1>

          {/* Avatar */}
          <div style={S.profileHeader}>
            <div
              style={{ ...S.avatar, backgroundImage: `url(${avatarPreview||userIcon})` }}
              onClick={() => !saved && fileInputRef.current.click()}
            >
              {!saved && <div style={S.avatarEdit}>✎</div>}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={e => {
                const file = e.target.files[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onloadend = () => setAvatarPreview(reader.result)
                  reader.readAsDataURL(file)
                }
              }}
            />
            <div style={S.userInfo}>
              <div style={S.name}>{formData.fullName||'Alex Johnson'}</div>
              <div style={S.email}>{formData.email||'alex.johnson@gmail.com'}</div>
            </div>
          </div>

          {/* Form */}
          <div style={S.formGrid}>
            {labelInput('Full Name','Alex Johnson','fullName')}
            {labelInput('Username','alexj_','username')}
            {labelInput('Email Address','alex.johnson@gmail.com','email')}
            {labelInput('Phone Number','+254 12345678','phone')}
            {labelInput('Date of Birth','15/06/1995','dob')}
            {labelInput('Gender','Male','gender')}
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: '#ccc', margin: '40px 0', width: '100%' }} />

          {/* Actions */}
          <div style={S.buttonRow}>
            <button onClick={() => setSaved(true)} style={S.btnPrimary} disabled={saved}>
              Save Changes
            </button>
            <button onClick={() => saved ? setSaved(false) : handleReset()} style={S.btnSecondary}>
              {saved ? 'Edit' : 'Reset to Default'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}