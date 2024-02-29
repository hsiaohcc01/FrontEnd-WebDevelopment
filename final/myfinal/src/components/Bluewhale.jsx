import React from 'react';
import bluewhale from '../static/images/bluewhale.jpg';
import '../static/css/BlogDetail.css';

function Bluewhale({ darkModeClass }) {
  return (
    <div className={`blog-detail ${darkModeClass}`}>
      <div className={`detail-container ${darkModeClass}`}>
        <div className='detail-title' aria-label='Blog detail title'>
          Blue Whale
        </div>
        <div className='detail-content' aria-label='Blog detail content'>
          <section>
            <h2><strong>Introduction:</strong></h2>
            <p>
              The largest animals ever to have lived on the planet (surpassing even dinosaurs), blue whales inspire awe and wonder with all the records they break: The largest blue whale ever recorded was 33 m long; a blue whale’s heart is the size of a small car; a child could crawl through a blue whale’s arteries; and blue whales produce the loudest sound on earth – even if it is too low in frequency for humans to hear it. There are at least five recognized sub-species of blue whale that occur in different ocean basins.
            </p>
          </section>
          <img className='detail-img' src={bluewhale} alt="Blue Whale" />
          <section>
            <p>Blue Whale</p>
          </section>
          <section>
            <h2><strong>Distribution:</strong></h2>
            <p>
              Blue whales occur worldwide in all major oceans except the Arctic. They are also absent from some regional seas such as the Mediterranean, Okhotsk and Bering seas. They are almost never seen off of eastern South America or eastern Australia. Despite their wide distribution, blue whales are not often encountered, partly due to their reduced numbers, and partly because they generally occur in offshore waters, with only a few known coastal breeding and feeding areas.
            </p>
          </section>
          <br /><br />
        </div>
      </div>
    </div>
  );
}

export default Bluewhale;
