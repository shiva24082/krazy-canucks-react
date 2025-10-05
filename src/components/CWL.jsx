import { Card, Container } from 'react-bootstrap';

function CWL() {
  const clans = [
    {
      name: "Krazy Canucks",
      icon: "/img/kc.png",
      link: "https://link.clashofclans.com/en?action=OpenClanProfile&tag=R0RL9UC",
      league: "/img/champ1.png",
      leagueAlt: "Champion League I Badge",
      rosterSize: 15,
      players: [
        "CALANGO YT 3.0", "shiva", "Infrared", "Tremor", "spalz",
        "teemo", "King Anonymous", "XxwolfkillerxX", "❤️GLAD_SON❤️",
        "ÑÔVÂ", "jeegar", "alki̥", "Bar Dilly", "Krishh", "jameseeey"
      ],
      substitutes: ["jj"]
    },
    {
      name: "Krazy Legends",
      icon: "/img/kl.png",
      link: "https://link.clashofclans.com/en?action=OpenClanProfile&tag=2LGGYCY8R",
      league: "/img/master1.png",
      leagueAlt: "Master League I Badge",
      rosterSize: 15,
      players: [
        "Bulldog16", "G-MAN", "***Pedja***", "You", "Aristocrat",
        "peoples champ", "Zama khan", "Jackal", "Hunter", "EggWard",
        "R1derfan7", "qwerty", "misteranswer", "KILLER CHIRAG 7", "ELVIS 0094"
      ]
    },
    {
      name: "Krazy Feeders",
      icon: "/img/kf.png",
      link: "https://link.clashofclans.com/en?action=OpenClanProfile&tag=Y9L29VLY",
      league: "/img/master2.png",
      leagueAlt: "Master League II Badge",
      rosterSize: 15,
      players: [
        "Papa Bear", "conqueror wally", "darkreaperx38", "BSingh", "WARRIOR",
        "KriSO", "Krazy☣Jeegar", "GuncapYT", "Rocks Pavan", "Lauchlann",
        "ÑØVÂ 2.O", "Mini L8R", "Zaploe", "Will Hunting", "siva"
      ]
    },
    {
      name: "Krazy Dominion",
      icon: "/img/kd.png",
      link: "https://link.clashofclans.com/en?action=OpenClanProfile&tag=2J9GGYVPP",
      league: "/img/crystal3.png",
      leagueAlt: "Crystal League III Badge",
      rosterSize: 30,
      players: [
        "SHIVA(mini)", "rockybytes", "omarion", "Jeegar", "KiNg MoHin",
        "kp", "ht_ Z-to-A", "Hodor", "Clasher Sunny", "jeegar",
        "R1derguy⚡️", "Zalope(2 accounts)", "twist", "White Harbour", "pusheen1",
        "Tes", "kiran", "pusheen2", "pusheen3", "pusheen4", "pusheen5",
        "NOOBIE_OREOS", "TBD"
      ],
      substitutes: ["Cyclone"]
    }
  ];

  return (
    <div>
      <Card className="cwl-header">
        <Card.Body className="text-center bg-primary text-light p-5 rounded">
          <h1 className="display-4 mb-4"><b>Clan War League</b></h1>
          <p className="lead mb-4"><b>Explore the rosters and rules of all participating clans</b></p>
          <p className="font-weight-bold h4 p-3 bg-light text-dark rounded">
            <b>CWL Search will be start between 11 AM and 2 PM EST on Friday 1,November,2024</b>
          </p>
        </Card.Body>
      </Card>

      <div className="timer-block text-center my-4">
        <script src="https://cdn.logwork.com/widget/countdown.js"></script>
        <a href="https://logwork.com/countdown-hf2r" className="countdown-timer" 
           data-timezone="Asia/Kolkata" data-date="2024-11-01 23:00" 
           data-background="#000000" data-digitscolor="#ff0000">
          Cwl Countdown
        </a>
      </div>

      <section className="rules">
        <div className="clan-title">
          <img src="/img/rule.jpg" alt="Rules Icon" className="icon" />
          <h2>Rules</h2>
        </div>
        <p className="h5"><strong>Here are the rules for Clan War League:</strong></p>
        <ul className="rule-grid">
          <li>Must follow clan emails and pinned messages.</li>
          <li>No 1-star attacks allowed, always aim for a minimum of two stars.</li>
          <li>No missed attacks allowed. If you miss one round, you won't participate in the remaining rounds. Chances of demotion or chance of being kicked.</li>
          <li>Inform early in clan chat if you are not available for any round.</li>
          <li>if your heroes or troops are not yet maxed, Use a power potion or a hero potion during your attack</li>
        </ul>
         <p className="h5"><strong>Additional Rules for Krazy Feeders:</strong></p>
        <ul className="rule-grid">
          <li>You can only attack your mirror base. If you want to attack a different base, you need permission from the player whose mirror it is. You can swap bases only if they agree.</li>
        </ul>
      </section>

      {clans.map((clan, index) => (
        <section key={index} className="clan">
          <div className="clan-title">
            <img src={clan.icon} alt={`${clan.name} Clan Icon`} className="icon" />
            <h2>{clan.name}</h2>
            <a href={clan.link} rel="noreferrer noopener" target="_blank" title={`Visit ${clan.name} clan profile`}>
              <img src="/img/link.png" alt="Clan Link Icon" className="link-icon" />
            </a>
          </div>

          <div className="clan-roster">
            <img src={clan.league} alt={clan.leagueAlt} title={clan.leagueAlt} />
            <p className='h5'><strong>Clan Roster({clan.rosterSize})</strong></p>
          </div>

          <ul className="player-grid" style={{ marginTop: '10px' }}>
            {clan.players.map((player, playerIndex) => (
              <li key={playerIndex}>{player}</li>
            ))}
          </ul>

          {clan.substitutes && (
            <>
              <p className="h5"><strong>Substitute/Helper</strong></p>
              <ul className="player-grid" style={{ marginTop: '10px' }}>
                {clan.substitutes.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      ))}
    </div>
  );
}

export default CWL;