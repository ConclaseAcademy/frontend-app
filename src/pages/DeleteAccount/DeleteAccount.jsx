import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../assets/images/home.svg';
import profileIcon from '../../assets/images/profile.svg';
import settingsIcon from '../../assets/images/settings.svg';
import clockIcon from '../../assets/images/clock.svg';
import trashIcon from '../../assets/images/delete.svg';
import logo from '../../assets/images/logo.svg';
import avatarIcon from '../../assets/images/avatar.svg';

export default function DeleteAccount() {
  const navigate = useNavigate();
  const [confirmationText, setConfirmationText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('delete');
  const [showSuccess, setShowSuccess] = useState(false);

  const sidebarItems = [
    { key: 'profile', label: 'Profile Information', icon: avatarIcon, path: '/profile' },
    { key: 'privacy', label: 'Privacy Settings', icon: settingsIcon, path: '/privacy-settings' },
    { key: 'reminder', label: 'Reminder', icon: clockIcon, path: '/reminder' },
    { key: 'delete', label: 'Delete Account', icon: trashIcon, path: '/delete-account' }
  ];

  const handleDelete = () => {
    if (confirmationText === 'DELETE') {
      setShowPopup(false);
      setConfirmationText('');
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
    } else {
      alert('You must type DELETE exactly to confirm.');
    }
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
          {showSuccess && (
            <div style={styles.successBox}>Account successfully deleted.</div>
          )}

          <h1 style={styles.h1}>Delete Account</h1>
          <p style={styles.warningText}>
            We will permanently delete your Mindful account and all associate data. Please be sure that you want to delete everything on your account before proceeding. <strong>We will not be able to recover your data after you delete your account!</strong>
          </p>

          <button onClick={() => setShowPopup(true)} style={styles.btnDelete}>
            Delete Mindful Account
          </button>

          {/* POPUP */}
          {showPopup && (
            <div style={styles.popupOverlay}>
              <div style={styles.popup}>
                <div style={styles.popupHeader}>
                  <h2 style={{ margin: 0 }}>Delete Account</h2>
                </div>

                <p style={styles.popupText}>
                  Are you absolutely sure you want to delete your account? The account, including all journals and entries, will be <strong>deleted permanently</strong>. You will receive an email with a link to confirm your account deletion.
                </p>

                <p style={styles.popupText}>
                 Type 'DELETE' in the box below to continue with deleting your account.
                </p>

                <input
                  type="text"
                  value={confirmationText}
                  onChange={(e) => setConfirmationText(e.target.value)}
                  style={styles.input}
                />

                <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
                  <button onClick={handleDelete} style={styles.btnConfirm}>
                    Confirm Delete
                  </button>
                </div>
              </div>
            </div>
          )}
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
  h1: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'Regular',
    fontSize: '20px',
    leadingTrim: 'NONE',
    lineHeight: '150%',
    letterSpacing: '0%',
    verticalAlign: 'middle',
  },
  warningText: {
    marginBottom: 40,
    fontSize: 16,
    color: '#D70101'
  },
  btnDelete: {
    backgroundColor: '#D62828',
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
  popupOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  popup: {
    backgroundColor: '#fff',
    width: 560,
    height: 461,
    borderRadius: 12,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    fontFamily: 'Poppins',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
  },
  popupHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 560,
    height: 50,
    padding: 10,
    backgroundColor: '#818181',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  popupTitle: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '30px',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginLeft: -24
  },
  input: {
    width: 512,
    height: 58,
    borderRadius: 12,
    border: '2px solid #8D8686',
    padding: 16,
    fontSize: 16,
    fontFamily: 'Poppins',
    outline: 'none',
  },
  btnConfirm: {
    width: 512,
    height: 58,
    backgroundColor: '#808080',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: 20
  },
  btnPrimary: {
    backgroundColor: '#808080',
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
    flex: 1,
    height: 48,
    border: 'none',
    borderRadius: 8,
    fontSize: 16,
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
};