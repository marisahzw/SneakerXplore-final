import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updateEmailMessage, setUpdateEmailMessage] = useState("");
  const [updatePasswordMessage, setUpdatePasswordMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const response = await axios.get("http://localhost:3001/profile", {
          headers: {
            Authorization: `Bearer ${token}` // Set Authorization header with token
          }
        });

        setUserProfile(response.data);
        setEmail(response.data.email);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to fetch user profile");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateEmail = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      await axios.put(
        "http://localhost:3001/profile/update-email",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}` // Set Authorization header with token
          }
        }
      );
      setUpdateEmailMessage("Email updated successfully");
    } catch (error) {
      console.error("Error updating email:", error);
      setUpdateEmailMessage("Failed to update email");
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      await axios.put(
        "http://localhost:3001/profile/update-password",
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}` // Set Authorization header with token
          }
        }
      );
      setUpdatePasswordMessage("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error);
      setUpdatePasswordMessage("Failed to update password");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>Username: {userProfile.username}</p>
      </div>
      <div>
        <p>Email: {userProfile.email}</p>
      </div>
      <div>
        <h2>Update Email</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUpdateEmail}>Update Email</button>
        <p>{updateEmailMessage}</p>
      </div>
      <div>
        <h2>Update Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
        <p>{updatePasswordMessage}</p>
      </div>
    </div>
  );
};

export default UserProfile;
