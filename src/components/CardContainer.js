import React from "react";
import Card from './Card'
import monitorImage from '../images/monitor.webp'
import styles from './index.module.css'

const CardsData = [
    {
        title: "Card title 1",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: monitorImage,
    },
    {
        title: "Card title 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: monitorImage,
    },
    {
        title: "Card title 3",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: monitorImage,
    },
    {
        title: "Card title 4",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: monitorImage,
    },
    {
        title: "Card title 5",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: monitorImage,
    },
    {
        title: "Card title 6",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: monitorImage,
    }
]

function CardContainer() {
    return (
        <div className={styles['d-flex']}>
            {CardsData.map((value, index)=> (
                <Card data={value} key={index} />
            ))}
        </div>
    )
}

export default CardContainer