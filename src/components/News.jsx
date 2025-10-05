import { Card, Container } from 'react-bootstrap';

function News() {
  return (
    <Container fluid>
      <Card className="w-100 mx-auto m-5 p-3" style={{ maxWidth: '100%' }}>
        <Card.Body className="bg-white h1">
          Claim 150 Sour Elixir & Mashup Medals 👉👉👉👉
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://link.clashofclans.com/en/?action=voucher&code=1e40f215-d230-4eab-ac6f-ba6fd909a813"
          >
            <img src="/img/link.png" alt="Voucher Link Icon" className="link-icon" />
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default News;