import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './Store/authSlice'
import Login from './Pages/Login';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
