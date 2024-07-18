import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


import Login from './components/login';
import SignUp from './components/signup';
import BioDiversity from './components/home';
import Report from './components/report';
import Contact from './components/contact';
import About from './components/about';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';



function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/about'}>
              BIODIVERSIFICATION
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/report'}>
                    Report-A-complain
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Raising_Awareness
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>
                    Contact us
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
           
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<BioDiversity/>}/>
              <Route path="/report" element={<Report/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
      
            </Routes>
          
          </div>
        </div>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} BIODIVERSIFICATION. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App
