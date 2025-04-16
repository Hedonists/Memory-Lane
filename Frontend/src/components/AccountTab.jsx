import React from 'react'
import { LogOut } from 'lucide-react';

export default function AccountTab() {
  return (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-md mb-6">
      <h2 className="text-lg font-medium mb-4">Account Settings</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Email address</h3>
        <input
          type="email"
          defaultValue="ayush@example.com"
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Password</h3>
        <button className="px-3 py-1.5 border border-zinc-600 rounded hover:bg-zinc-800 transition-colors text-sm">
          Change password
        </button>
      </div>
      <div className="mt-6 pt-6 border-t border-zinc-800">
        <button className="px-3 py-1.5 text-red-400 hover:text-red-300 transition-colors text-sm flex items-center">
          <LogOut size={16} className="mr-1" />
          Sign out
        </button>
      </div>
    </div>
  );
}