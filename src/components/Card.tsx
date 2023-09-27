import "./Card.css"
interface CardProps {
    imgSrc: string,
    commonName: string,
    scientificName: string,
    info: string,
}

const Card = ( {
    imgSrc,
    commonName,
    scientificName,
    info,
} : CardProps ) => {

    return (
        <div className="frogCard">
            <div className="imageContainer">
                <img
                    className="cardImage"
                    src={imgSrc}
                />
            </div>
            <div className="cardTitleContainer">
                <h1 className="cardTitle">{commonName}</h1>
            </div>
            <span className="scientificName">{scientificName}</span>
            <div className="cardInfoContainer">
                <p className="cardInfo">{info}</p>
            </div>
        </div>
    )
}

export default Card;