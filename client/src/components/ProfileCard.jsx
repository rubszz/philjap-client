import React, { useEffect, useState } from 'react';
import defaultProfileImage from '../assets/default_profile.jpg';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const ProfileCard = ({ user, onUserClick }) => {
  const [profileUrl, setProfileUrl] = useState(defaultProfileImage);

  useEffect(() => {
    getProfileUrl(user);
  }, [user]);

  const getProfileUrl = (user) => {
    if (user && user.uid) {
      const storage = getStorage();
      const storageRef = ref(storage, `${user.profileUrl}`);

      getDownloadURL(storageRef)
        .then((downloadUrl) => {
          setProfileUrl(downloadUrl);
        })
        .catch((error) => {
          console.error('Error getting profile image URL:', error);
          console.log('No profile picture found');
        });
    } else {
      console.log('No profile picture found');
    }
  };

  return (
    <div className="max-w-xl px-20 py-4 mx-auto overflow-hidden rounded-2xl shadow-lg hover:bg-gray-600 bg-gray-900">
    <div className="px-4 py-2">
      <img src={profileUrl} alt="Profile" className="w-32 h-32 mx-auto rounded-full" />
      <h2 className="mt-4 text-2xl font-bold text-center text-sky-400">Engr. {user ? user.firstName : ''}</h2>
      <p className="text-center text-gray-400"> {user ? user.lastName : ''}</p>
    </div>
    <div className="flex flex-col justify-center p-2 items-center">
      <p className=" text-white mb-2">{user ? user.email : ''}</p>
      <button className="p-1 bg-sky-600 rounded-full text-white mb-2 px-5 py-2" onClick={onUserClick}>Go to {user.firstName}'s Profile</button>
    </div>
  </div>
  );
};

export default ProfileCard;
