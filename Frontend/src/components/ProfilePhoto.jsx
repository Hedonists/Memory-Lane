import React from 'react'

import { useRef } from 'react';
import { User, Camera, Upload } from 'lucide-react';

export default function ProfilePhoto({ profilePhoto, setProfilePhoto }) {
  const fileInputRef = useRef(null);
  
  // Trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handler for photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would handle the file upload to a server here
      // For now, just simulate having a photo by creating a local URL
      const photoURL = URL.createObjectURL(file);
      setProfilePhoto(photoURL);
    }
  };
  
  return (
    <div className="mb-8">
      <label className="block mb-2">
        Profile photo
      </label>
      <div className="flex items-end gap-4">
        <div className="relative group">
          <div className={`w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border-2 ${profilePhoto ? 'border-blue-500' : 'border-zinc-700'}`}>
            {profilePhoto ? 
              <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : 
              <User size={40} className="text-zinc-500" />
            }
          </div>
          
          {/* Overlay for clicking to change photo */}
          <button 
            onClick={triggerFileInput}
            className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Camera size={24} className="text-white" />
          </button>
        </div>

        {/* Hidden file input */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handlePhotoUpload}
          accept="image/*"
          className="hidden"
        />
        
        <div>
          <button 
            onClick={triggerFileInput}
            className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded hover:bg-zinc-700 transition-colors flex items-center mb-2"
          >
            <Upload size={16} className="mr-2" />
            Upload photo
          </button>
          {profilePhoto && (
            <button 
              onClick={() => setProfilePhoto(null)}
              className="px-3 py-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Remove photo
            </button>
          )}
        </div>
      </div>
      <p className="text-sm text-zinc-400 mt-2">
        Recommended: Square JPG or PNG, at least 400x400 pixels
      </p>
    </div>
  );
}