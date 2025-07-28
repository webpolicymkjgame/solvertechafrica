import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import loan from './assets/app/loan.png';
import autoclick from './assets/app/autoclick.png';
import antithieft from './assets/app/antithieft.png';
import money from './assets/app/money.png';
import recovery from './assets/app/recovery.png';

import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Solvertech Africa Studio" className="logo-img" />
                <span className="studio-name">Solvertech Africa Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'Personal Loan EMI Tool',
      image: loan,
      link: 'https://play.google.com/store/apps/details?id=com.loancalculator.emicalculator.financialtools.autoloan.loantracker'
    },
    {
      name: 'Money Tracker: Expense Planner',
      image: money,
      link: 'https://play.google.com/store/apps/details?id=com.moneymanager.expensetracker.moneytracker.spendingtracker.budgetplanner.walletmanager'
    },
    {
      name: 'Anti-theft Phone Alert',
      image: antithieft,
      link: 'https://play.google.com/store/apps/details?id=com.phone.antitheft.donottouch.alarm.thief'
    },
    {
      name: 'Data Recovery: Photo & File',
      image: recovery,
      link: 'https://play.google.com/store/apps/details?id=com.recovery.datarecovery.alldatarecovery.deletedphotorecovery.filerecovery'
    },
    {
      name: 'Auto Clicker - Fast Auto Tap',
      image: autoclick,
      link: 'https://play.google.com/store/apps/details?id=com.autoclicker.auto.tap.automatictap.clicker'
    }

  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Solvertech Africa Studio</h2>
            <p className="about-text">Solvertech Africa Studio is a mobile app development studio dedicated to creating innovative, high-quality, and user-friendly applications.
              Our official website serves as a showcase for all the apps developed by Zed App Mobile – from casual games and productivity tools to educational and lifestyle apps.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:henricsanyu@gmail.com">henricsanyu@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              📍 Kyanakibi, Kyango Ward
                Bukomansimbi Town -
                Uganda (UG)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Solvertech Africa Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
