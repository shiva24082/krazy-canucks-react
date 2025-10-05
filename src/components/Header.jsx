import { Navbar, Nav, Container } from 'react-bootstrap';

function Header({ activeTab, setActiveTab }) {
  const closeNavbar = () => {
    // Close navbar on mobile after click
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <img src="/img/kc.png" alt="Krazy Canucks Clan Icon" className="icon" />
          Krazy Canucks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo03" />
        <Navbar.Collapse id="navbarTogglerDemo03">
          <Nav className="me-auto nav nav-tabs" style={{ borderBottom: 'white' }}>
            <Nav.Item className="p-1">
              <Nav.Link
                active={activeTab === 'home'}
                onClick={() => { setActiveTab('home'); closeNavbar(); }}
                style={{ cursor: 'pointer' }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-1">
              <Nav.Link
                active={activeTab === 'rules'}
                onClick={() => { setActiveTab('rules'); closeNavbar(); }}
                style={{ cursor: 'pointer' }}
              >
                Rule Book
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-1">
              <Nav.Link
                active={activeTab === 'cwl'}
                onClick={() => { setActiveTab('cwl'); closeNavbar(); }}
                style={{ cursor: 'pointer' }}
              >
                CWL
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-1">
              <Nav.Link
                active={activeTab === 'sidewar'}
                onClick={() => { setActiveTab('sidewar'); closeNavbar(); }}
                style={{ cursor: 'pointer' }}
              >
                Side War
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-1">
              <Nav.Link
                active={activeTab === 'news'}
                onClick={() => { setActiveTab('news'); closeNavbar(); }}
                style={{ cursor: 'pointer' }}
              >
                News
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;