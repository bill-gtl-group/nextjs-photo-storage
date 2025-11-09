import Upload from '@/components/Upload';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Photo Storage App</h1>
      </div>

      <div className="w-full max-w-5xl">
        <Upload />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* You can add more content here */}
      </div>
    </main>
  );
}
