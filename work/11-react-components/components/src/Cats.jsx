import './static/css/Cats.css'
import Cat1 from './static/images/cat1.jpg'
import Cat2 from './static/images/cat2.jpg'

function Cats() {
    return (
        <div className="cats">
            <div class="card__right">
                <img class="card__pic__right" src={Cat1} alt="Cats" />
                <h2 class="card__title">Claws</h2>
                <div class="card__text">Cats have protractible and retractable claws. In their normal, relaxed position, the claws are sheathed with the skin and fur around the paw's toe pads. This keeps the claws sharp by preventing wear from contact with the ground and allows for the silent stalking of prey. The claws on the forefeet are typically sharper than those on the hindfeet. Cats can voluntarily extend their claws on one or more paws. They may extend their claws in hunting or self-defense, climbing, kneading, or for extra traction on soft surfaces. Cats shed the outside layer of their claw sheaths when scratching rough surfaces.</div>
            </div>
            <div class="card__left">
                <img class="card__pic__left" src={Cat2} alt="Cats" />
                <div class="card__area">
                    <h2 class="card__title">Cats</h2>
                    <div class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio quaerat vel! Repellat officiis assumenda eligendi sunt provident iste deserunt omnis! Facere aliquid atque ipsam! Autem fugit consectetur distinctio repellat ratione quisquam error alias libero. Quidem est iste quam sapiente mollitia doloremque blanditiis sunt facilis enim ut ipsa, fugit labore id voluptatibus? Tempora perferendis ad culpa. Quis nulla praesentium dolorem a deserunt ducimus tempore alias deleniti animi fugit labore, eum nobis minus minima unde neque expedita ipsa non dolor officiis, distinctio eius. Laborum, odio provident. Hic non sint voluptate nostrum consequuntur, in, inventore vero ipsa ea voluptates illo. Odio impedit magnam aliquam doloremque quidem. Reprehenderit dignissimos architecto reiciendis nobis, pariatur perferendis. Vero officia corrupti quaerat ipsum mollitia facilis in quis reprehenderit unde, animi incidunt molestiae!</div>
                </div>
            </div>
        </div>
    );
}

export default Cats;