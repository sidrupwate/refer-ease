import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
