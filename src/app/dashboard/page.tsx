'use client';

import Upload from '@/components/Upload';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <nav>
          <ul>
            <li>
              <div className="w-full text-left p-2 rounded bg-gray-700">
                Photo Gallery
              </div>
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
