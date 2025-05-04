import { UserIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f8f6] flex justify-center px-4 py-8">
      <div className="max-w-3xl w-full bg-white rounded-xl p-6 shadow-sm">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-bold text-gray-900">ReferEase</h1>
          <nav style={{display: 'flex'}} className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#">Find Jobs</a>
            <a href="#">My Referrals</a> 
            <UserIcon className="w-8 h-8 text-gray-600 bg-gray-200 rounded-full p-1" />
            </nav>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get referred to your dream job
          </h2>
          <button className="px-6 py-2 bg-[#215B5F] text-white font-medium rounded-lg hover:bg-[#1b4d51] transition">
            Browse Jobs
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-10">
          {[
            {
              title: 'Product Designer',
              company: 'TechCorp',
              location: 'San Francisco, CA',
            },
            {
              title: 'Software Engineer',
              company: 'InnovateX',
              location: 'New York, NY',
            },
            {
              title: 'Marketing Specialist',
              company: 'BlueWave',
              location: 'Austin, TX',
            },
          ].map((job, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 border rounded-lg bg-white" style={{borderColor: 'lightgrey'}}>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
              <button className="px-4 py-2 border rounded-md text-gray-800 hover:bg-gray-100">
                Request Referral
              </button>
            </div>
          ))}
        </div>

        {/* Referral Request Status */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Referral Request Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between p-3 border rounded-md bg-white">
              <div>
                <p className="font-medium text-gray-800">Data Analyst</p>
                <p className="text-sm text-gray-500">DataWorks</p>
              </div>
              <span className="text-sm text-gray-600">Pending</span>
            </div>
            <div className="flex justify-between p-3 border rounded-md bg-white">
              <div>
                <p className="font-medium text-gray-800">UX Designer</p>
                <p className="text-sm text-gray-500">Designity</p>
              </div>
              <span className="text-sm text-blue-600 font-medium">Referred</span>
            </div>
            <div className="flex justify-between p-3 border rounded-md bg-white">
              <div>
                <p className="font-medium text-gray-800">Project Manager</p>
                <p className="text-sm text-gray-500">BuildIt</p>
              </div>
              <span className="text-sm text-teal-700 font-medium">Interview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
