import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import homeIcon     from '../../assets/images/home.svg'
import avatarIcon   from '../../assets/images/avatar.svg'
import settingsIcon from '../../assets/images/settings.svg'
import clockIcon    from '../../assets/images/clock.svg'
import trashIcon    from '../../assets/images/delete.svg'
import logo         from '../../assets/images/logo.svg'
import timerIcon    from '../../assets/images/timer.svg'

export default function ReminderPage() {
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
  const [activeTab, setActiveTab] = useState('reminder')
  const [saved, setSaved] = useState(false)
  const [reminders, setReminders] = useState([
    { id: 1, time: '08:00' },
    { id: 2, time: '21:00' },
    { id: 3, time: '18:00' },
    { id: 4, time: '14:00' },
  ])

  // 3️⃣ Sidebar items
  const sidebarItems = [
    { key: 'profile',  label: 'Profile Information', icon: avatarIcon,   path: '/profile' },
    { key: 'privacy',  label: 'Privacy Settings',   icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder',           icon: clockIcon,    path: '/reminder' },
    { key: 'delete',   label: 'Delete Account',     icon: trashIcon,    path: '/delete-account' },
  ]

  // 4️⃣ Handlers
  const handleTimeChange = (idx, val) => {
    const arr = [...reminders]
    arr[idx].time = val
    setReminders(arr)
    setSaved(false)
  }
  const handleReset = () => {
    setReminders([
      { id: 1, time: '08:00' },
      { id: 2, time: '21:00' },
      { id: 3, time: '18:00' },
      { id: 4, time: '14:00' },
    ])
    setSaved(false)
  }

  // 5️⃣ Responsive measurements
  const sidebarWidth  = device === 'desktop' ? 370 : device === 'tablet' ? 300 : '100%'
  const topbarPad     = device === 'desktop' ? '0 75px' : '0 20px'
  const mainPad       = device === 'desktop' ? '40px 45px' : '20px'
  const boxWidth      = device === 'desktop' ? 852 : '100%'
  const boxHeight     = device === 'desktop' ? 125 : 100
  const boxGap        = device === 'desktop' ? 24 : 16

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

    remindersContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: boxGap,
      marginBottom: 40,
    },
    reminderBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: boxWidth,
      maxWidth: '100%',
      height: boxHeight,
      padding: '24px 16px',
      backgroundColor: '#EEF4FF',
      borderRadius: 16,
      boxSizing: 'border-box',
    },
    leftGroup: {
      display: 'flex', gap: 16, alignItems: 'center',
    },
    ellipse: {
      width: device === 'mobile' ? 32 : 40,
      height: device === 'mobile' ? 32 : 40,
      borderRadius: '50%',
      backgroundColor: '#1A3467',
    },
    timeGroup: {
      display: 'flex', alignItems: 'center', gap: 8,
    },
    timeInput: {
      fontSize: 16,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: 60,
      fontFamily: 'Poppins',
      textAlign: 'center',
    },

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
      padding: '12px 24px',
      borderRadius: 12,
      border: 'none',
      fontSize: 16,
      fontFamily: 'Poppins',
      cursor: 'pointer',
      boxSizing: 'border-box',
    },
    btnSecondary: {
      backgroundColor: '#6E645E',
      color: '#fff',
      width: device === 'mobile' ? '100%' : 226,
      height: 58,
      padding: '12px 24px',
      borderRadius: 12,
      border: 'none',
      fontSize: 16,
      fontFamily: 'Poppins',
      cursor: 'pointer',
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
          {saved && <div style={S.successBox}>All settings saved successfully!</div>}
          <h1 style={S.h1}>Reminder Settings</h1>

          <div style={S.remindersContainer}>
            {reminders.map((r, idx) => (
              <div key={r.id} style={S.reminderBox}>
                <div style={S.leftGroup}>
                  <div style={S.ellipse} />
                  <div style={{ fontWeight: 500, fontSize: 16 }}>Morning Journal Reminder</div>
                </div>
                <div style={S.timeGroup}>
                  <input
                    type="text"
                    value={r.time}
                    onChange={e => handleTimeChange(idx, e.target.value)}
                    style={S.timeInput}
                  />
                  <img src={timerIcon} width={20} height={20} alt="Timer" />
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