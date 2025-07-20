import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import homeIcon     from '../../assets/images/home.svg'
import avatarIcon   from '../../assets/images/avatar.svg'
import settingsIcon from '../../assets/images/settings.svg'
import clockIcon    from '../../assets/images/clock.svg'
import trashIcon    from '../../assets/images/delete.svg'
import logo         from '../../assets/images/logo.svg'

export default function PrivacyPage() {
  // 1️⃣ Responsive breakpoints
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

  // 2️⃣ State
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('privacy')
  const [saved, setSaved] = useState(false)
  const [toggles, setToggles] = useState({
    visibility: false,
    shareProgress: false,
    analytics: false,
    email: false,
    push: false,
  })

  // 3️⃣ Sidebar items
  const sidebarItems = [
    { key: 'profile',      label: 'Profile Information', icon: avatarIcon,   path: '/profile' },
    { key: 'privacy',      label: 'Privacy Settings',   icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder',     label: 'Reminder',           icon: clockIcon,    path: '/reminder' },
    { key: 'delete',       label: 'Delete Account',     icon: trashIcon,    path: '/delete-account' },
  ]

  // 4️⃣ Handlers
  const handleToggle = key => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))
    setSaved(false)
  }
  const handleReset = () => {
    setToggles({
      visibility: false,
      shareProgress: false,
      analytics: false,
      email: false,
      push: false,
    })
    setSaved(false)
  }

  // 5️⃣ Responsive measurements
  const sidebarWidth = device === 'desktop' ? 370 : device === 'tablet' ? 300 : '100%'
  const topbarPadding = device === 'desktop' ? '0 75px' : '0 20px'
  const mainPadding = device === 'desktop' ? '40px 45px' : '20px'
  const toggleWidth = device === 'desktop' ? 937 : '100%'
  const toggleGap = device === 'mobile' ? 16 : 24

  // 6️⃣ Styles object
  const S = {
    page: {
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#F5F7FA',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
    topbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 116,
      background: '#4A83B9',
      padding: topbarPadding,
      boxSizing: 'border-box',
    },
    topLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: device === 'desktop' ? 287 : 'auto',
    },
    icon: { width: 24, height: 24, cursor: 'pointer' },
    title: { fontSize: device === 'mobile' ? 16 : 20, fontWeight: 500, color: '#fff' },
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
      display: 'flex',
      alignItems: 'center',
      gap: 19,
      padding: '16px 24px',
      backgroundColor: isActive ? '#0E5CF9' : 'transparent',
      color: isActive ? '#fff' : '#000',
      width: device === 'desktop' ? 280 : '100%',
      height: 62,
      borderRadius: 8,
      fontWeight: 500,
      cursor: 'pointer',
      boxSizing: 'border-box',
    }),
    dividerLine: {
      height: 1,
      backgroundColor: '#ccc',
      width: device === 'desktop' ? 280 : '100%',
      margin: '8px 0',
    },

    main: {
      flex: 1,
      padding: mainPadding,
      boxSizing: 'border-box',
    },
    successBox: {
      width: device === 'desktop' ? 951 : '100%',
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

    togglesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: toggleGap,
      marginBottom: 40,
    },
    toggleBox: {
      width: toggleWidth,
      maxWidth: '100%',
      borderRadius: 16,
      background: '#EEF4FF',
      border: '2px solid #ccc',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    toggleTextGroup: {
      width: device === 'desktop' ? 457 : '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 12,
      boxSizing: 'border-box',
    },
    toggleLabel: { fontSize: 16, fontWeight: 500 },
    toggleSub:   { fontSize: 14, color: '#555' },

    switchOuter: isOn => ({
      width: 48,
      height: 24,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      backgroundColor: isOn ? '#1A3467' : '#ccc',
      cursor: 'pointer',
      transition: 'background 0.3s',
      boxSizing: 'border-box',
    }),
    switchInner: isOn => ({
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      marginLeft: isOn ? 24 : 2,
      transition: 'margin 0.3s',
    }),

    buttonRow: {
      display: 'flex',
      flexDirection: device === 'mobile' ? 'column' : 'row',
      gap: device === 'mobile' ? 16 : 34,
    },
    btnPrimary: {
      backgroundColor: '#1A3467',
      color: '#fff',
      width: device === 'mobile' ? '100%' : 226,
      height: 58,
      border: 'none',
      borderRadius: 12,
      cursor: 'pointer',
      fontSize: 16,
      fontFamily: 'Poppins',
      boxSizing: 'border-box',
    },
    btnSecondary: {
      backgroundColor: '#6E645E',
      color: '#fff',
      width: device === 'mobile' ? '100%' : 226,
      height: 58,
      border: 'none',
      borderRadius: 12,
      cursor: 'pointer',
      fontSize: 16,
      fontFamily: 'Poppins',
      boxSizing: 'border-box',
    },
  }

  // 7️⃣ Render
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

      {/* Body */}
      <div style={S.content}>
        {/* Sidebar */}
        <div style={S.sidebar}>
          {sidebarItems.map(({ key, label, icon, path }, i) => {
            const isActive = activeTab === key
            return (
              <React.Fragment key={key}>
                <div
                  onClick={() => { setActiveTab(key); navigate(path) }}
                  style={S.sidebarItem(isActive)}
                >
                  <img src={icon} width={24} height={24} alt="" />
                  <span>{label}</span>
                </div>
                {i < sidebarItems.length - 1 && <div style={S.dividerLine} />}
              </React.Fragment>
            )
          })}
        </div>

        {/* Main */}
        <div style={S.main}>
          {saved && <div style={S.successBox}>All settings saved successfully!</div>}
          <h1 style={S.h1}>Privacy Settings</h1>

          <div style={S.togglesContainer}>
            {[
              ['Profile Visibility', 'Allow others to view your profile information', 'visibility'],
              ['Share Progress', 'Allow sharing your wellness progress', 'shareProgress'],
              ['Data Analytics', 'Allow analytics on your usage', 'analytics'],
              ['Email Notifications', 'Receive email updates', 'email'],
              ['Push Notifications', 'Receive push reminders', 'push'],
            ].map(([lbl, sub, key]) => (
              <div key={key} style={S.toggleBox}>
                <div style={S.toggleTextGroup}>
                  <div style={S.toggleLabel}>{lbl}</div>
                  <div style={S.toggleSub}>{sub}</div>
                </div>
                <div
                  onClick={() => handleToggle(key)}
                  style={S.switchOuter(toggles[key])}
                >
                  <div style={S.switchInner(toggles[key])} />
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: '#ccc', margin: '40px 0', width: '100%' }} />

          {/* Actions */}
          <div style={S.buttonRow}>
            <button onClick={() => setSaved(true)} style={S.btnPrimary}>
              Save Changes
            </button>
            <button onClick={handleReset} style={S.btnSecondary}>
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}