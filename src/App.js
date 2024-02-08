import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tracker from './Pages/Tracker.js';
import Home from './Pages/Home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/tracker" element={<Tracker/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

// https://www.youtube.com/watch?v=w7ejDZ8SWv8