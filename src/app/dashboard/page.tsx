'use client';

import { useState } from 'react';
import Upload from '@/components/Upload';
import { Chat } from '@/components/Chat';

export default function DashboardPage() {
  const [activeView, setActiveView] = useState('photos');

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <nav>
          <ul>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${activeView === 'photos' ? 'bg-gray-700' : ''}`}
                onClick={() => setActiveView('photos')}
              >
                Photo Gallery
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${activeView === 'chat' ? 'bg-gray-700' : ''}`}
                onClick={() => setActiveView('chat')}
              >
                AI Chatbot
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {activeView === 'photos' && <Upload />}
        {activeView === 'chat' && <Chat />}
      </main>
    </div>
  );
}
