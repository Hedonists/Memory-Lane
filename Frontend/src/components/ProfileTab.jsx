import React from 'react'

// components/ProfileTab.js
import { useState } from 'react';
import ProfilePhoto from './ProfilePhoto';
import UsageStats from './UsageStats';

export default function ProfileTab({ saveChanges }) {
  // State for form fields
  const [fullName, setFullName] = useState('Ayush');
  const [displayName, setDisplayName] = useState('Ayush');
  const [profilePhoto, setProfilePhoto] = useState(null);
  
  // Handler for sidebar actions
  const handleSidebarAction = (action) => {
    alert(`${action} action clicked`);
  };

  return (
    <>
      {/* Profile Form */}
      <div className="mb-12">
        <ProfilePhoto profilePhoto={profilePhoto} setProfilePhoto={setProfilePhoto} />

        <div className="mb-6">
          <label htmlFor="fullName" className="block mb-2">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="displayName" className="block mb-2">
            What should we call you?
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        
        <button 
          onClick={saveChanges}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors"
        >
          Save Changes
        </button>
      </div>
      {/* Usage Statistics */}
        <UsageStats />
      
    </>
  );
}