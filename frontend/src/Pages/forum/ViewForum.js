import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/view.css';

const ViewThread = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thread, setThread] = useState(null);
  const [threadReplies, setThreadReplies] = useState([]);
  const [replyInput, setReplyInput] = useState('');
  // eslint-disable-next-line 
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const fetchThreadDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/forum/view/${id}`);
        if (response.ok) {
          const data = await response.json();
          setThread(data);
          setThreadReplies(data.threadReplies || []);
        } else {
          console.error('Error fetching forum');
        }
      } catch (error) {
        console.error('Error fetching forum', error);
      }
    };

    fetchThreadDetails();
  }, [id]);

  const handleSave = async () => {
    if (!isLoggedIn) {
      
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/forum/updateThread/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          threadReplies: [...threadReplies, replyInput],
          threadReplyCounter: threadReplies.length + 1
        }),
      });
  
      if (response.ok) {
        navigate('/forum');
        alert("Reply sent!");
      } else {
        console.error('Error updating thread');
      }
    } catch (error) {
      console.error('Error updating thread:', error);
    }
  };

  const handleBack = () => {
    navigate('/forum');
  };



  return (
    <div className='mainview-container'>
      <div className='view-container'>
        <h2 className='view-heading'>View Thread</h2>
        {thread ? (
          <div  className='view-table'>
           <div className='thread-info'>
            <p className='thread-title'><strong>Title:</strong> {thread.threadTitle}</p>
            <p><strong>Author:</strong> {thread.threadAuthor}</p>
          </div>
            <div className='threadview-description'>
              <p><strong>Description:</strong> {thread.threadDescription}</p>
            </div>            
            <p className='view-likes'><strong>Likes:</strong> {thread.threadLikes}</p>
            <p className='no-replies'><strong>Number of Replies: </strong> {thread.threadReplyCounter}</p>
            <p><strong>Replies:</strong></p>
            <ul className='replies'>
              {threadReplies.map((reply, index) => (
                <li key={index}className='reply-box'>{reply}</li>
              ))}
            </ul>

            <div>
              <label className='view-labels' htmlFor="Reply">
                <strong>Reply</strong>
              </label>
              <textarea
                id="Reply"
                rows="4"
                cols="50"
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                className='view-input'
              />
            </div>
            
            <div className='view-buttons'>
              <button onClick={handleBack} className='viewback-button'>Back</button>
              <button onClick={handleSave} className='viewsend-button'>Send</button>
            </div>

          </div>
        ) : (
          <p className='style-loading'>Loading Thread details...</p>
        )}
        
      </div>
    </div>
  );
};

export default ViewThread;
