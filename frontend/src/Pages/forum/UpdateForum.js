import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/update.css';

const UpdateThread = () =>  {
    const [threadTitle, setThreadTitle] = useState('');
    const [threadDescription, setThreadDescription] = useState('');
    const [threadAuthor, setThreadAuthor] = useState('');
    const [isLoggedIn] = useState(!!localStorage.getItem('token')); // Check if user is logged in
    const [userProfile, setUserProfile] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchThreadDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/forum/view/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setThreadTitle(data.threadTitle);
                    setThreadDescription(data.threadDescription);
                    setThreadAuthor(data.threadAuthor);
                } else {
                    console.error('Error fetching thread details for update');
                }
            } catch (error) {
                console.error('Error fetching thread details for update:', error);
            }
        };

        fetchThreadDetails();
    }, [id]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3001/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserProfile(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3001/forum/updateThread/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ threadTitle, threadDescription, threadAuthor }),
            });

            if (response.ok) {
                navigate('/forum');
            } else {
                console.error('Error updating thread');
            }
        } catch (error) {
            console.error('Error updating thread:', error);
        }
    };

    const handleCancel = () => {
        navigate('/forum');
    };

    if (!isLoggedIn || !userProfile || userProfile.username !== threadAuthor) {
        return (
            <div>
                <p>You are not authorized to update this thread.</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Update Thread</h2>
            <div>
                <label htmlFor="threadTitle" style={styles.label}>Thread Title</label>
                <input type="text" id="threadTitle" value={threadTitle} onChange={(e) => setThreadTitle(e.target.value)} style={styles.input} />
            </div>
            <div>
                <label htmlFor="threadDescription" style={styles.label}>Thread Description</label>
                <textarea id="threadDescription" rows="4" cols="50" value={threadDescription} onChange={(e) => setThreadDescription(e.target.value)} style={styles.input} />
            </div>
        
            <button onClick={handleSave} style={styles.saveButton}>Save</button>
            <button onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
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

export default UpdateThread;
