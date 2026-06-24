import React from 'react';
import { useNavigate } from 'react-router';

const NotFound404Page = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.message}>
          Oops! The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate('/')}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#4338ca')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4f46e5')}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

// Inline styles for zero-dependency implementation
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  content: {
    textAlign: 'center',
    maxWidth: '500px',
  },
  errorCode: {
    fontSize: '120px',
    fontWeight: '800',
    color: '#4f46e5',
    margin: '0 0 10px 0',
    lineHeight: '1',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 15px 0',
  },
  message: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.6',
    margin: '0 0 30px 0',
  },
  button: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)',
  },
};

export default NotFound404Page;
