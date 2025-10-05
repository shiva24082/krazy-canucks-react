import { Card } from 'react-bootstrap';

function Rules() {
  return (
    <div>
      <div className="rules card">
        <Card.Body>
          {/* <h2 className="h3">Clan War Rules</h2> */}
          <p className="h5"><strong>Here are the rules for Wars:</strong></p>
          <ul className="rule-grid">
            <li><strong>No Missed Attacks:</strong> All members are expected to use both attacks in wars without exception.</li>
            <li><strong>Timely Attacks:</strong>
              <ul>
                <li>TH 17: No deadline, attack late if possible.</li>
                <li>TH 15-16: Attack before the 15h mark.</li>
                <li>TH 14 and below: Attack before the 12h mark.</li>
                <li>Exceptions: 3-starring on a late attack exempts you from penalties.</li>
              </ul>
            </li>
            <li><strong>Full Hero Availability:</strong> All heroes must be up and available for war attacks.</li>
            <li><strong>Base Reservation:</strong>
              <ul>
                <li>When flagging a base, note the current war time left in the notes.</li>
                <li>The base is reserved for 4 hours.</li>
                <li>Flag without a timer is voided.</li>
                <li>No reservations after your town hall timer has expired.</li>
              </ul>
            </li>
            <li><strong>Optimized Army Compositions:</strong> Use/learn army compositions with a high 3-star success rate in wars and Clan War Leagues (CWL).</li>
            <li><strong>Strong Base Design:</strong>
              <ul>
                <li>Use effective bases to minimize the enemy clan's stars.</li>
                <li>Emphasize the importance of good base design for overall clan success.</li>
              </ul>
            </li>
            <li><strong>Pay Attention to Mails & Pinned Messages:</strong> Regularly check and respond to in-game mails for important announcements and strategy discussions.</li>
            <li><strong>Effective Communication:</strong>
              <ul>
                <li>Good communication is essential.</li>
                <li>Actively engage in discussions, provide updates, and coordinate strategies.</li>
                <li>A positive and collaborative communication style is encouraged.</li>
              </ul>
            </li>
            <li><strong>Bonus Point:</strong> Give and receive constructive feedback to enhance individual and collective performance.</li>
            <li><strong>Note:</strong> Players added for numbers are exempt from these rules. We will track player data through Discord bots. Those who have problems can play in KF wars with fewer restrictions.</li>
          </ul>
        </Card.Body>
      </div>
      <div className="rules card">
        <Card.Body>
          {/* <h2 className="h3">Clan Capital Rules</h2> */}
          <p className="h5"><strong>Here are the rules for Clan Capital:</strong></p>
          <ul className="rule-grid">
            <li><strong>Weekly Raids:</strong>
              <ul>
                <li>Once you initiate an attack on a district, you must complete it unless you exhaust all your attacks.</li>
                <li>No mini accounts till last 20 hours</li>
              </ul>
            </li>
            <li><strong>Priority Upgrade:</strong> Focus on upgrading buildings that have been flagged as a priority.</li>
          </ul>
        </Card.Body>
      </div>
    </div>
  );
}

export default Rules;