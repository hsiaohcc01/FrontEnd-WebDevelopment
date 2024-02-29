import React from 'react';
import killerwhale from '../static/images/killerwhale.jpg';
import '../static/css/BlogDetail.css';

function Killerwhale({ darkModeClass }) {
  return (
    <div className={`blog-detail ${darkModeClass}`}>
      <div className={`detail-container ${darkModeClass}`}>
        <div className='detail-title' aria-label='Blog detail title'>
          Killer Whale
        </div>
        <div className='detail-content' aria-label='Blog detail content'>
          <section>
            <h2><strong>Introduction:</strong></h2>
            <p>
              Killer whales, also known as orcas, are an iconic species, long revered by various aboriginal cultures and frequently the stars of animal performances at marine parks. The species has recently made even more famous by films like “Blackfish” and “Free Willy”. Technically, it is the largest dolphin species, but is called a whale because of its large size. It is the most widely distributed of all whale and dolphin species and can be found in every ocean basin and several semi-enclosed bodies of water like the Arabian Gulf and parts of the Mediterranean. Killer whales are highly distinctive and easily recognizable. Although still considered a single species, there are at least eight different recognized forms– differing in external coloring and appearance, feeding habits, and ecology. Two unnamed subspecies are recognized off the West Coast of North America – mammal-eating ‘transient’ and fish-eating ‘resident’ killer whales. While in many parts of their range they are highly mobile and their locations are difficult to predict, there are a few places where they are either resident or predictably present in certain seasons, and are one of the main attractions of whale-watching tours.
            </p>
          </section>
          <img className='detail-img' src={killerwhale} alt="Killer Whale" />
          <section>
            <p>Killer Whale</p>
          </section>
          <section>
            <h2><strong>Distribution:</strong></h2>
            <p>
              Killer whales are found all over the world. Although they are more densely concentrated in colder regions where their large prey species are more abundant, they appear to roam temperate and tropical areas as well, taking advantage of temporary or seasonal feeding opportunities.
            </p>
          </section>
          <br /><br />
        </div>
      </div>
    </div>
  );
}

export default Killerwhale;
