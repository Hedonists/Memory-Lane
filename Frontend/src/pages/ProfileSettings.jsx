import { useState } from 'react';
import Sidebar1 from '../components/Sidebar1';
import ProfileTab from '../components/ProfileTab';
import AccountTab from '../components/AccountTab';
import BillingTab from '../components/BillingTab';
import { X } from 'lucide-react';

export default function ProfileSettings({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('profile');

  // Define the saveChanges function
  const saveChanges = () => {
    // Implement your save logic here
    console.log("Changes saved");
  };

  if (!isOpen) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab saveChanges={saveChanges} />;
      case 'account':
        return <AccountTab />;
      case 'billing':
        return <BillingTab />;
      default:
        return <ProfileTab saveChanges={saveChanges} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-[85vh] flex flex-col rounded-2xl shadow-2xl
        bg-zinc-800/40 backdrop-blur-xl border border-white/10 text-white overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h1 className="text-xl font-semibold">Settings</h1>
          <button onClick={onClose} className="text-zinc-300 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar1 activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
