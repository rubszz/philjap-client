import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { firestore } from '../firebase/auth';
import ProfileCard from './ProfileCard';

const Explorer = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        const adminUsersSnapshot = await firestore.collection('users').where('isAdmin', '==', true).get();
        const adminUsersData = adminUsersSnapshot.docs.map((doc) => {
          const userData = doc.data();
          return {
            ...userData,
            uid: doc.id,
          };
        });
        setAdminUsers(adminUsersData);
      } catch (error) {
        console.error('Error fetching admin users:', error);
      }
    };

    fetchAdminUsers();
  }, []);

  const handleProfileCardClick = (user) => {
    navigate(`/profile/${user.uid}`);
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-8 p-8">
      <h1 className="items-center font-medium text-dimWhite">Explore our Engineers Portfolio</h1>
      <div className="grid grid-cols-3 gap-4">
        {adminUsers.map((user) => (
          <div key={user.uid} onClick={() => handleProfileCardClick(user)} className="cursor-pointer">
            <ProfileCard user={user} onUserClick={() => handleProfileCardClick(user)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
