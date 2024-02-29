import React from 'react';
import finwhale from '../static/images/finwhale.jpg';
import '../static/css/BlogDetail.css';

function Finwhale({ darkModeClass }) {
  return (
    <div className={`blog-detail ${darkModeClass}`}>
      <div className={`detail-container ${darkModeClass}`}>
        <div className='detail-title' aria-label='Blog detail title'>
          Fin Whale
        </div>
        <div className='detail-content' aria-label='Blog detail content'>
          <section>
            <h2><strong>Introduction:</strong></h2>
            <p>
              Fin whales are the second largest species of whale after blue whales. The two species are closely related, but fin whales have more pointed heads and are more streamlined than their giant cousins and unlike them they have various patterns of lighter shadings on their backs. Also called ‘finback’ or ‘razorback’ whales because of the pronounced ridge that runs from their dorsal fin to their tail, the species was heavily hunted throughout the industrial whaling era. With a predominantly open water/offshore distribution, fin whales are not so easily observed throughout most of their range, other than in the Mediterranean, where they are one of the most regularly observed whale species. Sadly, the Mediterranean population is also threatened by high levels of vessel traffic, among other things, and is considered vulnerable to extinction.
            </p>
          </section>
          <img className='detail-img' src={finwhale} alt="Fin Whale" />
          <section>
            <p>Fin Whale</p>
          </section>
          <section>
            <h2><strong>Distribution:</strong></h2>
            <p>
              Fin whales are widely distributed in colder offshore waters. They are rarely observed in the tropics, with the exception of areas where there is regular upwelling of cold water, such as off the coast of Peru. Despite having been commercially important for whaling, the species’ distribution and seasonal movements are poorly understood.
            </p>
          </section>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Finwhale;
