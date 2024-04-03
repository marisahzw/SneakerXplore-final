import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar';
import axios from 'axios';
import './css/forum.css';

function ViewThreads() {
  const [threadsList, setThreads] = useState([]);
  const [isLoggedIn] = useState(!!localStorage.getItem('token')); 
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchThreads = async () =>{
      try {
        const response = await fetch('http://localhost:3001/forum/view');
        if (response.ok) {
          const data = await response.json();
          setThreads(data);
        } else {
          console.error('Error fetching Threads');
        }
      } catch (error) {
        console.error('Error fetching Threads:', error);
      }
    };

    fetchThreads();
  }, []);

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

  const handleDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/forum/deleteThread/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const updatedList = threadsList.filter((thread) => thread._id !== id);
            setThreads(updatedList);
        } else {
            const errorMessage = await response.text();
            console.error(`Error deleting thread: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error deleting thread:', error);
    }
};




  return (
    <div className='mainthread-container'>
      <NavBar/>
      <div className='thread-container'>
        <h2 className='thread-heading'>Thread List</h2>
        {isLoggedIn && userProfile && (
          <Link to="/forum/createForum">
            <button className='add-button'>Create Thread</button>
          </Link>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th className="description-column">Description</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {threadsList.map(thread => (
              <tr key={thread._id}>
                <td>{thread.threadTitle}</td>
                <td>{thread.threadDescription}</td>
                <td>{thread.threadAuthor}</td>
                <td>
                  <Link to={`/forum/view/${thread._id}`}>
                    <button className="view-button">View</button>
                  </Link>
                  {isLoggedIn && userProfile && userProfile.username === thread.threadAuthor && (
                    <>
                      <Link to={`/forum/updateThread/${thread._id}`}>
                        <button className="update-button">Update</button>
                      </Link>
                      <button onClick={() => handleDelete(thread._id)} className='delete-button'>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default ViewThreads;
