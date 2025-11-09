'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Upload from '@/components/Upload';

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="mb-4 rounded bg-gray-700 p-3">
          <p className="text-sm text-gray-300">Logged in as:</p>
          <p className="font-semibold">{user.username}</p>
          <p className="text-xs text-gray-400">{user.role}</p>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <div className="w-full text-left p-2 rounded bg-gray-700">
                Photo Gallery
              </div>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left p-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Upload />
      </main>
    </div>
  );
}
