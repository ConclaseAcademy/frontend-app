import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import homeIcon     from '../../assets/images/home.svg'
import avatarIcon   from '../../assets/images/avatar.svg'
import settingsIcon from '../../assets/images/settings.svg'
import clockIcon    from '../../assets/images/clock.svg'
import trashIcon    from '../../assets/images/delete.svg'
import logo         from '../../assets/images/logo.svg'

export default function DeleteAccount() {
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
  const [confirmationText, setConfirmationText] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [activeTab, setActiveTab] = useState('delete')
  const [showSuccess, setShowSuccess] = useState(false)

  // 3️⃣ Sidebar
  const sidebarItems = [
    { key: 'profile', label: 'Profile Information', icon: avatarIcon,   path: '/profile' },
    { key: 'privacy', label: 'Privacy Settings',   icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder',           icon: clockIcon,    path: '/reminder' },
    { key: 'delete', label: 'Delete Account',      icon: trashIcon,    path: '/delete-account' },
  ]

  // 4️⃣ Handlers
  const handleDelete = () => {
    if (confirmationText === 'DELETE') {
      setShowPopup(false)
      setConfirmationText('')
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        navigate('/')
      }, 2000)
    } else {
      alert('You must type DELETE exactly to confirm.')
    }
  }

  // 5️⃣ Responsive measurements
  const sidebarWidth = device === 'desktop' ? 370 : device === 'tablet' ? 300 : '100%'
  const topbarPad    = device === 'desktop' ? '0 75px' : '0 20px'
  const mainPad      = device === 'desktop' ? '40px 45px' : '20px'
  const btnWidth     = device === 'mobile' ? '100%' : 226
  const popupWidth   = device === 'desktop' ? 560 : device === 'tablet' ? 480 : '90%'
  const popupHeight  = device === 'desktop' ? 461 : 'auto'
  const inputWidth   = device === 'desktop' ? 512 : '100%'

  // 6️⃣ Styles
  const S = {
    page: {
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#F5F7FA',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
    topbar: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 116, background: '#4A83B9', padding: topbarPad, boxSizing: 'border-box',
    },
    topLeft: {
      display: 'flex', alignItems: 'center', gap: 12,
      width: device === 'desktop' ? 287 : 'auto',
    },
    icon: { width: 24, height: 24, cursor: 'pointer' },
    title: {
      fontSize: device === 'mobile' ? 16 : 20,
      fontWeight: 500, color: '#fff',
    },
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
      height: 'calc(100vh - 116px)',
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
    divider: {
      height: 1, backgroundColor: '#ccc',
      width: device === 'desktop' ? 280 : '100%',
      margin: '8px 0',
    },

    main: {
      flex: 1, padding: mainPad, boxSizing: 'border-box',
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
    warningText: {
      marginBottom: 40,
      fontSize: 16,
      color: '#D70101',
    },
    btnDelete: {
      backgroundColor: '#D62828',
      color: '#fff',
      width: btnWidth,
      height: 58,
      padding: '12px 24px',
      borderRadius: 12,
      border: 'none',
      fontSize: 16,
      fontFamily: 'Poppins',
      cursor: 'pointer',
      boxSizing: 'border-box',
    },

    // Popup
    popupOverlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    popup: {
      backgroundColor: '#fff',
      width: popupWidth,
      maxWidth: '95%',
      height: popupHeight,
      borderRadius: 12,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxSizing: 'border-box',
      overflowY: 'auto',
    },
    popupHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#818181',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      padding: '10px',
      boxSizing: 'border-box',
    },
    popupTitle: {
      fontSize: 20,
      fontWeight: 500,
      color: '#fff',
      textAlign: 'center',
      flex: 1,
    },
    input: {
      width: inputWidth,
      maxWidth: '100%',
      height: 58,
      borderRadius: 12,
      border: '2px solid #8D8686',
      padding: 16,
      fontSize: 16,
      fontFamily: 'Poppins',
      outline: 'none',
      boxSizing: 'border-box',
    },
    btnConfirm: {
      width: inputWidth,
      maxWidth: '100%',
      height: 58,
      backgroundColor: '#808080',
      color: '#fff',
      border: 'none',
      borderRadius: 12,
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      alignSelf: 'center',
      boxSizing: 'border-box',
    },
  }

  return (
    <div style={S.page}>
      {/* Top Bar */}
      <div style={S.topbar}>
        <div style={S.topLeft}>
          <img src={homeIcon} alt="Home" style={S.icon} onClick={() => navigate('/dashboard')} />
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
                {i < sidebarItems.length - 1 && <div style={S.divider} />}
              </React.Fragment>
            )
          })}
        </div>

        {/* Main */}
        <div style={S.main}>
          {showSuccess && <div style={S.successBox}>Account successfully deleted.</div>}
          <h1 style={S.h1}>Delete Account</h1>
          <p style={S.warningText}>
            We will permanently delete your Mindful account and all associated data. 
            Please be sure you want to delete everything—<strong>this cannot be undone!</strong>
          </p>
          <button onClick={() => setShowPopup(true)} style={S.btnDelete}>
            Delete Mindful Account
          </button>

          {/* POPUP */}
          {showPopup && (
            <div style={S.popupOverlay}>
              <div style={S.popup}>
                <div style={S.popupHeader}>
                  <h2 style={S.popupTitle}>Delete Account</h2>
                </div>
                <p>
                  Are you absolutely sure you want to delete your account? Your data, journals, and entries 
                  will be <strong>permanently removed</strong>. You’ll receive an email with a link to confirm.
                </p>
                <p>Type 'DELETE' below to confirm:</p>
                <input
                  type="text"
                  value={confirmationText}
                  onChange={e => setConfirmationText(e.target.value)}
                  style={S.input}
                />
                <button onClick={handleDelete} style={S.btnConfirm}>
                  Confirm Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}