import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function ViewThreads() {
  const [threadsList, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async() =>{
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/forum/deleteThread/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedList = threadsList.filter((thread) => thread._id !== id);
        setThreads(updatedList);
      } else {
        console.error('Error deleting Thread');
      }
    } catch (error) {
      console.error('Error deleting Thread:', error);
    }
  };


  return (
    <div>
    <div className="container-fluid">
    <h2 className='mt-3'>Forum List</h2>
    <h10 className='mt-3'>General discussions on Sneakers and the community. Possible leads and more!</h10><br></br>
    <Link to="/forum/createForum">
        <button className=' mt-3 btn btn-danger'>+</button>
      </Link>
     
     <table className='container-fluid mt-4 '>   
          <tbody className='p-5 '>
            {threadsList.map(thread => (
              <tr className='border border-danger p-5 bg-danger-subtle' key={thread._id}>
                <td className='pt-3 ps-2'><h4 className='fw-bolder '>{thread.threadTitle}</h4>By: {thread.threadAuthor}</td>
                <td style={{width: "600px", height:"50px"}}>{thread.threadDescription}</td>
                <Link to={`/forum/view/${thread._id}`}>
                  <button className='btn btn-secondary btn-large mt-4 me-5 fw-bolder'>{`>`}</button>
                </Link>
                <Link to={`/forum/updateThread/${thread._id}`}>
                  <button  className='btn btn-secondary btn-large mt-4 me-4 fw-bold'>Update</button>
                </Link>
                <button  className='btn btn-danger btn-large mt-4 me-4 fw-bold'onClick={() => handleDelete(thread._id)} >Delete</button>
               
              </tr>
            ))}
          </tbody>
        </table></div>

    </div>
  );
}

export default ViewThreads;
