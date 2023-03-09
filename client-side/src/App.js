import './App.css';
import './index.css';
import React from 'react';
import Navbar from './components/navbar';
import Beranda from './pages/index';
import Notifikasi from './pages/notifikasi';
import Akun from './pages/akun';
import Login from './components/login/login';
import SignUp from './components/login/signUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './ProtectedRoutes';
// import { Stack } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
      <h2>JOURNAL LINK</h2>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/sign-up" exact element={<SignUp />} />
              <Route element={ProtectedRoutes}>
                {/* <Navbar /> */}
                <Route path="/beranda" exact element={<Beranda />} />
                <Route path="/notifikasi" exact element={<Notifikasi />} />
                <Route path="/akun" exact element={<Akun />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;