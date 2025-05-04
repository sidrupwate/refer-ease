import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">ReferEase</h1>
      <nav className="flex gap-6 text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}
