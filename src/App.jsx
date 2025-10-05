import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ClanCards from './components/ClanCards';
import Rules from './components/Rules';
import CWL from './components/CWL';
import News from './components/News';
import SideWar from './components/SideWar';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="container-fluid">
            <div className="container-fluid mt-4 p-3 text-center">
              <h1 className="h2 mb-3">Welcome to Krazy Canucks Clan Family</h1>
              <div className="button-group d-flex align-items-center justify-content-center">
                <a
                  href="https://discord.gg/EgRveTcEXE"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="btn btn-primary rounded-circle p-3"
                  role="button"
                  aria-label="Join our Discord server"
                >
                  <img src="/img/discord.svg" alt="Discord Icon" id="discord-svg" width="40" height="40" />
                </a>
                <p className="lead mb-0 ms-2">👈 Click this icon to join our Discord server.</p>
              </div>
            </div>
            <ClanCards />
          </div>
        );
      case 'rules':
        return <Rules />;
      case 'cwl':
        return <CWL />;
      case 'news':
        return <News />;
      case 'sidewar':
        return <SideWar />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div id="body-ss">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="visually-hidden-focusable">Skip to main content</a>
      
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main id="main-content">
        {renderContent()}
      </main>

      <footer className="bg-light py-3 mt-5">
        <Container className="text-center">
          <p className="mb-0">&copy; 2025 Krazy Canucks. All rights reserved.</p>
          <p className="small mt-2">
            <a href="https://krazy-canucks.web.app/privacy" className="text-muted me-3">Privacy Policy</a> | 
            <a href="https://krazy-canucks.web.app/sitemap.xml" className="text-muted">Sitemap</a>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
