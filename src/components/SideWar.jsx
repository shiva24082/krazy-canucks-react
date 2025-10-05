import { Card, Container } from 'react-bootstrap';

function SideWar() {
  return (
    <Container fluid>
      <Card className="w-100 mx-auto m-5 p-3" style={{ maxWidth: '100%' }}>
        <Card.Header className="bg-white h1">
          Feed The Legion
          <a rel="noreferrer noopener" target="_blank" href="https://link.clashofclans.com/en/?action=OpenClanProfile&tag=YUURVP2R">
            <img src="/img/link.png" alt="Clan Link Icon" className="link-icon" />
          </a>
        </Card.Header>
        <Card.Body>
          <p className="card-text mt-1">
            Earn extra rewards from regular wars during Clan War Leagues (CWL).
            Join this clan if you are interested.
          </p>
          <p className="card-text mt-1">Note: Players must join the clan before searching time.</p>

          <div className="text-center">
            <script src="https://cdn.logwork.com/widget/countdown.js"></script>
            <a href="https://logwork.com/countdown-hf2s" className="countdown-timer" 
               data-timezone="Asia/Kolkata" data-date="2024-11-03 14:00" 
               data-background="#000000" data-digitscolor="#ff0000">
              Sidewar Countdown
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SideWar;