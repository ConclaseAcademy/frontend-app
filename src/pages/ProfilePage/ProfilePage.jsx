import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/images/home.svg';
import userIcon from '../../assets/images/profile.svg'; // main avatar
import settingsIcon from '../../assets/images/settings.svg';
import clockIcon from '../../assets/images/clock.svg';
import trashIcon from '../../assets/images/delete.svg';
import Avatar from '../../assets/images/avatar.svg'; // sidebar avatar icon
import logo from '../../assets/images/logo.svg';

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: ''
  });

  const sidebarItems = [
    { key: 'profile', label: 'Profile Information', icon: Avatar, path: '/profile' },
    { key: 'privacy', label: 'Privacy Settings', icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder', icon: clockIcon, path: '/reminder' },
    { key: 'delete', label: 'Delete Account', icon: trashIcon, path: '/delete-account' }
  ];

  const labelInput = (label, placeholder, id) => (
    <div style={styles.formGroup}>
      <label htmlFor={id} style={styles.label}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={formData[id]}
        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        style={styles.input}
        disabled={saved}
      />
    </div>
  );

  const handleReset = () => {
    setFormData({
      fullName: '',
      username: '',
      email: '',
      phone: '',
      dob: '',
      gender: ''
    });
    setSaved(false);
  };

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

      {/* Content Body */}
      <div style={{ display: 'flex' }}>

        {/* Sidebar */}
        <div style={{ width: 370, background: '#E6EBF3', paddingTop: 30, paddingLeft: 45 }}>
          {sidebarItems.map(({ key, label, icon, path }, index) => {
            const isActive = location.pathname === path;
            return (
              <div key={key}>
                <div
                  onClick={() => navigate(path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 19,
                    padding: '16px 24px',
                    backgroundColor: isActive ? '#0E5CF9' : 'transparent',
                    color: isActive ? 'white' : 'black',
                    width: 280,
                    height: key === 'profile' ? 82 : 62,
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  <img src={icon} width={24} height={24} />
                  <span>{label}</span>
                </div>
                {index < sidebarItems.length - 1 && (
                  <div style={{ height: 1, backgroundColor: '#ccc', width: 280, margin: '8px 0' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Main Section */}
        <div style={styles.main}>
          {saved && (
            <div style={styles.alert}>
              All settings saved successfully!
            </div>
          )}

          <h1 style={styles.h1}>Profile Information</h1>

          {/* Avatar Section */}
          <div style={styles.profileHeader}>
            <div
              style={{
                ...styles.avatar,
                backgroundImage: `url(${avatarPreview || userIcon})`
              }}
              onClick={() => !saved && fileInputRef.current.click()}
            >
              {!saved && <div style={styles.avatarEdit}>✎</div>}
            </div>

            <input
              type="file"
              accept="image/*"
              capture="user"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setAvatarPreview(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />

            <div style={styles.userInfo}>
              <div style={styles.name}>{formData.fullName || 'Alex Johnson'}</div>
              <div style={styles.email}>{formData.email || 'alex.johnson@gmail.com'}</div>
            </div>
          </div>

          {/* Form Fields */}
          <div style={styles.formGrid}>
            {labelInput('Full Name', 'Alex Johnson', 'fullName')}
            {labelInput('Username', 'alexj_', 'username')}
            {labelInput('Email Address', 'alex.johnson@gmail.com', 'email')}
            {labelInput('Phone Number', '+254 12345678', 'phone')}
            {labelInput('Date of Birth', '15/06/1995', 'dob')}
            {labelInput('Gender', 'Male', 'gender')}
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: '#ccc', margin: '40px 0', width: '100%' }} />

          {/* Action Buttons */}
          <div style={styles.buttonRow}>
            <button
              onClick={() => setSaved(true)}
              style={styles.btnPrimary}
              disabled={saved}
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                if (saved) {
                  setSaved(false); // Edit mode
                } else {
                  handleReset(); // Reset to placeholders
                }
              }}
              style={styles.btnSecondary}
            >
              {saved ? 'Edit' : 'Reset to Default'}
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
    justifyContent: 'space-between'
  },
  icon: {
    width: 24,
    height: 24
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: '#fff'
  },
  logoImage: {
    height: 48,
    objectFit: 'contain'
  },
  main: {
    flex: 1,
    padding: '33px 45px'
  },
  alert: {
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
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginBottom: 40
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    cursor: 'pointer'
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
    fontSize: 12
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20
  },
  email: {
    color: '#555'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 457px)',
    gridAutoRows: '100px',
    columnGap: 40,
    rowGap: 20,
    marginBottom: 80
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  },
  label: {
    fontSize: 14,
    color: '#333'
  },
  input: {
    width: 457,
    height: 58,
    padding: 16,
    border: '2px solid #ccc',
    borderRadius: 12,
    fontSize: 14,
    fontFamily: 'Poppins'
  },
  buttonRow: {
    display: 'flex',
    gap: 34
  },
  btnPrimary: {
    backgroundColor: '#1A3467',
    color: '#fff',
    width: 226,
    height: 58,
    padding: '12px 24px',
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
    fontFamily: 'Poppins'
  },
  btnSecondary: {
    backgroundColor: '#716B6B',
    color: '#fff',
    width: 226,
    height: 58,
    padding: '12px 24px',
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
    fontFamily: 'Poppins'
  }
};