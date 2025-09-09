export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto backdrop-blur-sm bg-opacity-90">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-pulse">
            Hello World!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to your first Next.js application
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full px-8 py-3 text-white font-semibold inline-block shadow-lg hover:shadow-xl transition-shadow duration-300">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </main>
  )
}