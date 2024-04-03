import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/create.css';

const CreateForum = () => {
  const [threadTitle, setThreadTitle] = useState('');
  const [threadDescription, setThreadDescription] = useState('');
  const [threadAuthor, setThreadAuthor] = useState('');
  const [threadLikes] = useState(0); // threadLikes to 0
  const [threadReplyCounter] = useState(0); // threadReplyCounter to 0
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setThreadAuthor(response.data.username);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError(<p style={{ color: 'red', fontWeight: 'bold', fontSize: '40px', textAlign: 'center', height: '30ch', marginTop: '50px'  }}>Sorry You need to be signed in to create a thread </p>);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/forum/createThread', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ threadTitle, threadDescription, threadAuthor, threadLikes, threadReplyCounter }),
      });

      if (response.ok) {
        navigate('/forum');
      } else {
        console.error('Error saving Thread');
      }
    } catch (error) {
      console.error('Error saving Thread:', error);
    }
  };

  const handleCancel = () => {
    navigate('/forum');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.heading}>Create Thread</h2>
        <div>
          <label htmlFor="threadTitle" style={styles.label}>
            Thread Title
          </label>
          <input type="text" id="threadTitle" value={threadTitle} onChange={(e) => setThreadTitle(e.target.value)} style={styles.input} />
        </div>
        <div>
          <label htmlFor="threadDescription" style={styles.label}>
            Thread Description
          </label>
          <textarea
            id="threadDescription"
            rows="4"
            cols="50"
            value={threadDescription}
            onChange={(e) => setThreadDescription(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="threadAuthor" style={styles.label}>
          </label>
          <p>Author: {threadAuthor}</p>
        </div>
        <button onClick={handleSave} style={styles.saveButton}>
          Save
        </button>
        <button onClick={handleCancel} style={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF', // white background
    color: '#000000', // black text
  },
  heading: {
    textAlign: 'center',
    color: '#FF0000', // red heading
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555555', // dark gray label
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    fontSize: '16px',
    border: '1px solid #FF0000', // red border
  },
  saveButton: {
    backgroundColor: '#FF0000', // red background
    color: '#FFFFFF', // white text
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF', // white background
    color: '#FF0000', // red text
    padding: '10px 15px',
    border: '1px solid #FF0000', // red border
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default CreateForum;
