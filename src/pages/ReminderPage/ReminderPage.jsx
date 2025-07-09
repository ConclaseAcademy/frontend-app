import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../assets/images/home.svg';
import settingsIcon from '../../assets/images/settings.svg';
import clockIcon from '../../assets/images/clock.svg';
import trashIcon from '../../assets/images/delete.svg';
import logo from '../../assets/images/logo.svg';
import avatarIcon from '../../assets/images/avatar.svg';
import timerIcon from '../../assets/images/timer.svg';

export default function ReminderPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('reminder');
  const [saved, setSaved] = useState(false);
  const [reminders, setReminders] = useState([
    { id: 1, time: '08:00' },
    { id: 2, time: '21:00' },
    { id: 3, time: '18:00' },
    { id: 4, time: '14:00' }
  ]);

  const handleTimeChange = (index, newTime) => {
    const updated = [...reminders];
    updated[index].time = newTime;
    setReminders(updated);
    setSaved(false);
  };

  const handleReset = () => {
    setReminders([
      { id: 1, time: '08:00' },
      { id: 2, time: '21:00' },
      { id: 3, time: '18:00' },
      { id: 4, time: '14:00' }
    ]);
    setSaved(false);
  };

  const sidebarItems = [
    { key: 'profile', label: 'Profile Information', icon: avatarIcon, path: '/profile' },
    { key: 'privacy', label: 'Privacy Settings', icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder', icon: clockIcon, path: '/reminder' },
    { key: 'delete', label: 'Delete Account', icon: trashIcon, path: '/delete-account' }
  ];

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

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
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
                <div style={styles.divider} />
              )}
            </div>
          ))}
        </div>

        {/* Main Area */}
        <div style={{ flex: 1, padding: '40px 45px' }}>
          {saved && (
            <div style={styles.successBox}>All settings saved successfully!</div>
          )}
          <h1 style={styles.h1}>Reminder Settings</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {reminders.map((reminder, index) => (
              <div key={reminder.id} style={styles.reminderBox}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={styles.ellipse} />
                  <div style={{ fontWeight: 500, fontSize: 16 }}>Morning Journal Reminder</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input
                    type="text"
                    value={reminder.time}
                    onChange={(e) => handleTimeChange(index, e.target.value)}
                    style={styles.timeInput}
                  />
                  <img src={timerIcon} alt="Timer" style={{ width: 20, height: 20 }} />
                </div>
              </div>
            ))}
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
  icon: { width: 24, height: 24 },
  title: { fontSize: 16, fontWeight: 500, color: '#fff' },
  logoImage: { height: 48 },
  sidebar: {
    width: 370,
    background: '#E6EBF3',
    paddingTop: 30,
    paddingLeft: 45
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
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: 280,
    margin: '8px 0'
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
  reminderBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 852,
    height: 125,
    padding: '24px 16px',
    backgroundColor: '#EEF4FF',
    borderRadius: 16,
    gap: 290
  },
  ellipse: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#1A3467'
  },
  timeInput: {
    fontSize: 16,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: 60,
    fontFamily: 'Poppins',
    textAlign: 'center'
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