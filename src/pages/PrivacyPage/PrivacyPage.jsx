import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../assets/images/home.svg';
import profileIcon from '../../assets/images/profile.svg';
import settingsIcon from '../../assets/images/settings.svg';
import clockIcon from '../../assets/images/clock.svg';
import trashIcon from '../../assets/images/delete.svg';
import logo from '../../assets/images/logo.svg';
import avatarIcon from '../../assets/images/avatar.svg';

export default function PrivacyPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('privacy');
  const [saved, setSaved] = useState(false);
  const [toggles, setToggles] = useState({
    visibility: false,
    shareProgress: false,
    analytics: false,
    email: false,
    push: false
  });

  const handleToggle = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
    setSaved(false);
  };

  const handleReset = () => {
    setToggles({
      visibility: false,
      shareProgress: false,
      analytics: false,
      email: false,
      push: false
    });
    setSaved(false);
  };

  const sidebarItems = [
    { key: 'profile', label: 'Profile Information', icon: avatarIcon, path: '/profile' },
    { key: 'privacy', label: 'Privacy Settings', icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder', icon: clockIcon, path: '/reminder' },
    { key: 'delete', label: 'Delete Account', icon: trashIcon, path: '/delete-account' }
  ];

  const renderToggle = (label, subLabel, key) => (
    <div style={{
      width: 937,
      height: 120,
      borderRadius: 16,
      background: '#EEF4FF',
      border: '2px solid #ccc',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 335
    }}>
      <div style={{
        width: 457,
        height: 72,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12
      }}>
        <div style={{ fontSize: 16, fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 14, color: '#555' }}>{subLabel}</div>
      </div>
  
      <div
        onClick={() => handleToggle(key)}
        style={{
          width: 48,
          height: 24,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          backgroundColor: toggles[key] ? '#1A3467' : '#ccc',
          cursor: 'pointer',
          transition: 'background 0.3s'
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#fff',
            marginLeft: toggles[key] ? '24px' : '2px',
            transition: 'margin 0.3s'
          }}
        />
      </div>
    </div>
  );


  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
      {/* Top Bar */}
      <div style={styles.topbar}>
        <div style={styles.left}>
        <img
  src={homeIcon}
  alt="Home"
  style={{ ...styles.icon, cursor: 'pointer' }}
  onClick={() => navigate('/dashboard')}
/>
          <div style={styles.title}>Profile & Settings</div>
        </div>
        <img src={logo} alt="MindfulSpace" style={styles.logoImage} />
        <div style={{ width: 287 }} />
      </div>

      {/* Body */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: 370, background: '#E6EBF3', paddingTop: 30, paddingLeft: 45 }}>
          {sidebarItems.map(({ key, label, icon, path }, index) => (
            <div key={key}>
              <div
                onClick={() => navigate(path)}
                style={{
                  ...styles.sidebarItem,
                  backgroundColor: activeTab === key ? '#0E5CF9' : 'transparent',
                  color: activeTab === key ? 'white' : 'black'
                }}
              >
                <img src={icon} width={24} height={24} />
                <span>{label}</span>
              </div>
              {index < sidebarItems.length - 1 && (
                <div style={{ height: 1, backgroundColor: '#ccc', width: 280, margin: '8px 0' }} />
              )}
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: '40px 45px' }}>
          {saved && (
            <div style={styles.successBox}>
              All settings saved successfully!
            </div>
          )}
          <h1 style={styles.h1}>Privacy Settings</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {renderToggle('Profile Visibility', 'Allow others to view your profile information', 'visibility')}
            {renderToggle('Share Progress', 'Allow sharing of your wellness progress with friends', 'shareProgress')}
            {renderToggle('Data Analytics', 'Allow sharing of your wellness progress with friends', 'analytics')}
            {renderToggle('Email Notifications', 'Email Notifications', 'email')}
            {renderToggle('Push Notifications', 'Receive push notifications for reminders and updates', 'push')}
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: '#ccc', margin: '40px 0' }} />

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 34 }}>
            <button
              onClick={() => setSaved(true)}
              style={styles.btnPrimary}
            >
              Save Changes
            </button>
            <button
              onClick={handleReset}
              style={styles.btnSecondary}
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  topbar: {
    width: '100%',
    height: 116,
    background: '#4A83B9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 75px'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    width: 287,
    gap: 12
  },
  icon: {
    width: 24,
    height: 24
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff'
  },
  logoImage: {
    height: 48
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 19,
    padding: '16px 24px',
    width: 280,
    height: 62,
    borderRadius: 6,
    fontWeight: 500,
    cursor: 'pointer'
  },
  successBox: {
    width: 951,
    height: 48,
    backgroundColor: '#319F43',
    color: '#fff',
    borderRadius: 10,
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
    fontWeight: 500
  },
  h1: {
    fontSize: 28,
    marginBottom: 24
  },
  toggleSwitch: {
    width: 48,
    height: 24,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.3s',
    cursor: 'pointer',
    padding: 2
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: '#fff',
    transition: 'margin 0.3s'
  },
  btnPrimary: {
    backgroundColor: '#1A3467',
    color: '#fff',
    width: 226,
    height: 58,
    padding: '12px 24px',
    borderRadius: 12,
    border: 'none',
    fontSize: 16,
    fontFamily: 'Poppins',
    cursor: 'pointer'
  },
  btnSecondary: {
    backgroundColor: '#6E645E',
    color: '#fff',
    width: 226,
    height: 58,
    padding: '12px 24px',
    borderRadius: 12,
    border: 'none',
    fontSize: 16,
    fontFamily: 'Poppins',
    cursor: 'pointer'
  }
};