import Card, { CardProps } from "../Card";
import "./CardList.css"

interface CardListProps {
    cards: CardProps[]
}

const CardList = ( {
    cards,
} : CardListProps) => {
    return (
        <div class="cardList">
            {cards.map( card => (
                <Card
                    {...card}
                />
            ) ) }
        </div>
    )
}

export default CardList;