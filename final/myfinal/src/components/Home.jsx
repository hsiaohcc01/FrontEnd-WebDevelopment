import bluewhale from '../static/images/bluewhale.jpg'
import finwhale from '../static/images/finwhale.jpg'
import killerwhale from '../static/images/killerwhale.jpg'
import '../static/css/Home.css'

function Home({ changePage, darkModeClass }) {
    return (
        <div className={`home ${darkModeClass}`}>
            <div className={`blog-card-left fade-in ${darkModeClass}`} onClick={(e) => { changePage('/bluewhale.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={bluewhale} alt="Blue Whale" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Blue Whale
                    </div>
                    <div className='blog-content'>
                        Blue whales have been protected from hunting by the IWC since 1966
                    </div>
                </div>
            </div>
            <div className={`blog-card-right fade-in ${darkModeClass}`} onClick={(e) => { changePage('/finwhale.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-right' src={finwhale} alt="Fin Whale" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Fin Whale
                    </div>
                    <div className='blog-content'>
                        Heavily hunted during the industrial whaling period in the first half of the 20th century, fin whales were severely depleted
                    </div>
                </div>
            </div>
            <div className={`blog-card-left fade-in ${darkModeClass}`} onClick={(e) => { changePage('/killerwhale.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={killerwhale} alt="Killer Whale" aria-label='The cover of this blog'/>
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Killer Whale
                    </div>
                    <div className='blog-content'>
                        Killer whales were actively hunted in a Norway, Japan, the Soviet Union and the Antarctic through until the 1980’s, but are now only taken in small numbers for food (or as a population control measure) in coastal fisheries in Japan, Greenland, Indonesia, and the Caribbean islands
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;