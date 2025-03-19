import React, { useState } from 'react';

const BusinessCard = ({ name, education, jobTitle, company, email, logoUrl }) => {
  // Состояние для отображения email
  const [showEmail, setShowEmail] = useState(false);

  // Функция для переключения видимости email
  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div style={styles.card}>
      <img src={logoUrl} alt={`${company} logo`} style={styles.logo} />
      <h2>{name}</h2>
      <p><strong>Education:</strong> {education}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Company:</strong> {company}</p>

      {/* Условный рендеринг для email */}
      {showEmail && (
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      )}

      {/* Кнопка для переключения видимости email */}
      <button onClick={toggleEmail} style={styles.button}>
        {showEmail ? 'Hide Contact Details' : 'Show Contact Details'}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '100px',
    height: '100px',
    borderRadius: '0%',
    objectFit: 'contain',
    marginBottom: '15px',
  },
  button: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: 'rgb(69, 176, 226)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default BusinessCard;
