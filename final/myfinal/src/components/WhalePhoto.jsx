import '../static/css/WhalePhoto.css'
import Carousel from "./Carousel";
function WhalePhoto({ darkModeClass }) {
    return (
        <div className={`album ${darkModeClass}`}>
            <div className={`album-title ${darkModeClass}`} aria-label='Album title'>
                Whale
            </div>
            <Carousel></Carousel>
            <br />
            <br />
        </div>
    )
}

export default WhalePhoto;