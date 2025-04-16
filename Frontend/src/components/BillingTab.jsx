import React from 'react'

import { CreditCard } from 'lucide-react';

export default function BillingTab() {
  return (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-md mb-6">
      <h2 className="text-lg font-medium mb-4">Billing Information</h2>
      <div className="mb-6">
        <div className="p-4 bg-zinc-800 rounded-md mb-4 flex items-center">
          <div className="bg-blue-500 p-2 rounded mr-3">
            <CreditCard size={20} />
          </div>
          <div>
            <h3 className="font-medium">Current Plan: Pro</h3>
            <p className="text-sm text-zinc-300">
              Your next payment of $20.00 will be processed on May 13, 2025
            </p>
          </div>
        </div>
        <button className="px-3 py-1.5 border border-zinc-600 rounded hover:bg-zinc-800 transition-colors text-sm">
          Manage Subscription
        </button>
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Payment method</h3>
        <div className="flex items-center">
          <div className="bg-zinc-800 p-2 rounded mr-2">
            <span>💳</span>
          </div>
          <span>•••• •••• •••• 4242</span>
          <button className="ml-auto text-blue-400 hover:text-blue-300 text-sm">
            Edit
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Billing history</h3>
        <div className="text-sm">
          <div className="flex justify-between py-2 border-b border-zinc-800">
            <span>April 13, 2025</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between py-2 border-b border-zinc-800">
            <span>March 13, 2025</span>
            <span>$20.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}