export default function Home() {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get Referred to Your Dream Job</h1>
          <p className="text-lg text-gray-600 mb-8">
            Skip the waiting lines. Connect with employees ready to refer you. Quick, simple, and effective.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700">
            Browse Referral Jobs
          </button>
        </div>
      </section>
    );
  }
  