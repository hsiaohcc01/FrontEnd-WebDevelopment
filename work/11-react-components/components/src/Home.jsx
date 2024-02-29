import Cat1 from './static/images/cat1.jpg'
import Cat2 from './static/images/cat2.jpg'
import Cat3 from './static/images/cat3.jpg'
import Cat4 from './static/images/cat4.jpg'
import Cat5 from './static/images/cat5.jpg'
import Cat6 from './static/images/cat6.jpg'
import './static/css/Home.css'

function Home({ onNav }) {
    return (
        <div className="home">
            <div className="card">
                <h2 className="card__title">Jorts</h2>
                <img className="card__pic" src={Cat1} alt="Cat_Pic" />
                <div className="card__text">Female domestic cats can have kittens from spring to late autumn in temperate zones and throughout the year in equatorial regions, with litter sizes often ranging from two to five kittens.</div>
            </div>
            <div className="card">
                <h2 className="card__title">Jean</h2>
                <img className="card__pic" src={Cat2} alt="Cat_Pic" />
                <div className="card__text">The earliest known evidence for the occurrence of the domestic cat in Greece dates to around 1200 BC. Greek, Phoenician, Carthaginian and Etruscan traders introduced domestic cats to southern Europe.</div>
            </div>
            <div className="card">
                <h2 className="card__title">Maru</h2>
                <img className="card__pic" src={Cat3} alt="Cat_Pic" />
                <div className="card__text">Lorem ipsum dolor sit amet consectetur, at commodi nobis est magnam. Maiores aliquid deserunt magni.</div>
            </div>
            <div className="card">
                <h2 className="card__title">Nyancat</h2>
                <img className="card__pic" src={Cat4} alt="Cat_Pic" />
                <div className="card__text">Lorem ipsum, dolor sit amet consectetur ta doloribus sint, odio, laboriosam a debitis, atque iusto animi voluptas!</div>
            </div>
            <div className="card">
                <h2 className="card__title">Grumpy Cat</h2>
                <img className="card__pic" src={Cat5} alt="Cat_Pic" />
                <div className="card__text">Lorem ipsum dolor sit, amet consectetur adipis uuntur cumque dolorum, optio reprehenderit delectus, veniam totam odit temporibus quidem voluptate veritatis saepe.</div>
            </div>
            <div className="card">
                <h2 className="card__title">GLil Bub
</h2>
                <img className="card__pic" src={Cat6} alt="turtle on land near the sea" />
                <div className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicintium provident est magnam. Maiores aliquid deserunt magni.</div>
            </div>
        </div>
    );
}

export default Home;