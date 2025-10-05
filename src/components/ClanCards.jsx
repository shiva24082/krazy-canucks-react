import { Container, Row, Col, Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';

function ClanCards() {
  const clanRequirements = {
    kc: (
      <ul className='rule-grid'>
        <li>🌟 Active Daily</li>
        <li>💬 Active in Chat</li>
        <li>📜 Follow Rules</li>
        <li>⚔️ War Enthusiasts</li>
        <li>🏰 TH 14 and Above</li>
        <li>🛡️ FC-Based Joining</li>
        <li>🤝Support Clan & Teammates</li>
      </ul>
    ),
    kf: (
      <ul className='rule-grid'>
        <li>🌟 Active Daily or Weekly</li>
        <li>📜 Follow Rules</li>
        <li>⚔️ Active in War</li>
        <li>🏰 TH 8 and Above</li>
        <li>🤝Support Clan & Teammates</li>
      </ul>
    ),
    kl: (
      <ul className='rule-grid'>
        <li>🌟 Active Daily</li>
        <li>⚔️ Competitive & War Enthusiasts</li>
        <li>🏰 TH 15 and Above</li>
        <li>🤝Support Clan & Teammates</li>
      </ul>
    ),
    fl: (
      <ul className='rule-grid'>
        <li>🌟 Active Daily</li>
        <li>⚔️ Competitive & War Enthusiasts</li>
        <li>🏰 TH 12 and Above</li>
        <li>🤝Support Clan & Teammates</li>
      </ul>
    ),
    kd: (
      <ul className='rule-grid'>
        <li>💰Double Loot</li>
        <li>🤝Support Clan & Teammates</li>
      </ul>
    )
  };

  const clans = [
    {
      id: 'kc',
      name: 'Krazy Canucks',
      image: '/img/kc.png',
      description: [
        "Welcome to Krazy Canucks, the ultimate clan you've been searching for!",
        "As the main clan, we pride ourselves on being very active and competitive in wars and CWL.",
        "No drama here, just a group of awesome adults who love to play and win."
      ],
      link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=R0RL9UC'
    },
    {
      id: 'kf',
      name: 'Krazy Feeders',
      image: '/img/kf.png',
      description: [
        "Introducing the Krazy Feeders clan, a community that values a relaxed and less active gaming experience.",
        "With regular small wars, this clan offers a balanced and enjoyable gameplay for its members.",
        " " // Empty space to maintain height
      ],
      link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=Y9L29VLY'
    },
    {
      id: 'kl',
      name: 'Krazy Legends',
      image: '/img/kl.png',
      description: [
        "Krazy Legends is a modern and straightforward clan that focuses solely on war.",
        "With a name that captures attention, this clan is open exclusively during the Clan War Leagues (CWL).",
        " " // Empty space to maintain height
      ],
      link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=2LGGYCY8R'
    },
    {
      id: 'fl',
      name: 'Feed The Legion',
      image: '/img/fl.png',
      description: [
        "Feed The Legion is a clan dedicated exclusively to Clan War Leagues (CWL).",
        "Focused on boosting your performance and achieving top results.",
        " ", " ", " ", " ", " " // Empty spaces to maintain height
      ],
      link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=YUURVP2R'
    },
    {
      id: 'kd',
      name: 'Krazy Dominion',
      image: '/img/kd.png',
      description: [
        "Krazy Dominion is a dedicated clan for side wars and friendly battles.",
        "Focused on double loot during Clan War Leagues(CWL)",
        " ", " ", " ", " ", " " // Empty spaces to maintain height
      ],
      link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=2J9GGYVPP'
    }
  ];

  return (
    <Container className="mt-1 clan-cards">
      <h2 className="h2 text-center mb-5">Names of Family Clans</h2>
      <Row>
        {clans.map((clan) => (
          <Col key={clan.id} md={4} className="mb-4">
            <Card className="h-100 clan-card">
              <Card.Img variant="top" src={clan.image} alt={`${clan.name} Clan Badge`} className="clan-card-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center h4">{clan.name}</Card.Title>
                
                {/* FIX: Remove Card.Text wrapper and use div instead */}
                <div className="flex-grow-1 card-description-container">
                  <ul className="p-2 card-description">
                    {clan.description.map((desc, index) => (
                      <li key={index} className={desc === " " ? "invisible" : ""}>{desc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="d-flex clan-card-buttons">
                  <OverlayTrigger
                    trigger="focus"
                    placement="top"
                    overlay={
                      <Popover>
                        <Popover.Header as="h3">{clan.name} Clan Requirements</Popover.Header>
                        <Popover.Body>
                          {clanRequirements[clan.id]}
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="danger" size="sm" className="small-text me-2 clan-btn">
                      Clan Requirements
                    </Button>
                  </OverlayTrigger>
                  <Button
                    href={clan.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="primary"
                    className="small-text me-2 clan-btn"
                    title={`Join ${clan.name} clan`}
                  >
                    Join {clan.name} for {clan.id === 'kf' ? 'a Relaxing' : clan.id === 'kl' || clan.id === 'fl' ? 'a Competitive' : 'an Epic'} Journey!
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ClanCards;