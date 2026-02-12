import emoji from "./assets/emoji2.png"

function Card() {

    return(
        <div className="card">
            <img className="card-img" src = {emoji} alt="image of Dereje" />
            <h1 className="card-title">Card</h1>
            <p className="card-text">this is my first card using react</p>
        </div>
    );
};

export default Card;