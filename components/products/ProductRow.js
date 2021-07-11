import Link from 'next/link'
import { Image, Card, Badge, Button} from "react-bootstrap"
import { RichText} from "prismic-reactjs"
import styles from "./ProductRow.module.scss"


export default function ProductRowSection(props) {
    const products = props.products;
    const card_items = products.map((card) =>
    <Card className={styles.cardContainer} key={card.id} >
        <Card.Img variant="top" src={card.picture} className={styles.cardImg}/>
        <Card.Body>
        <Card.Title className={styles.cardTitle}>
            {RichText.render(card.name)}
        </Card.Title>
        <Badge pill variant="info">
            {RichText.render(card.category)}
        </Badge>
        {(card.price !== null && card.price !== undefined) &&
            <Card.Text className={styles.cardContent}>
               Prix: {card.price} FCFA
            </Card.Text>
        }      
        {(card.description !== null && card.description !== undefined) &&
            <Card.Text className={styles.cardContent}>
                {RichText.render(card.description)}
            </Card.Text>
        }        
        <Link href={"/store" /*"/products/"+card.id*/} passHref> 
            <Button variant="success" >Voir</Button>
        </Link>        
        </Card.Body>
    </Card>
    );

    return(
        <div className={styles.section}>
            <h2 className={styles.title}>Pharmacopée</h2>
            <Link href={"/store"} passHref><h3 className={styles.action}>Dernier Arrivage</h3></Link>
            <div className={styles.container}>
                {card_items}
            </div>
        </div>
    )
}

// const test = [
//     {
//         id: 1,
//         name: "Revitalose Tonic",
//         picture: "/products/p1.jpg",
//         category: "brevage",
//         price: "5000",
//         description: "Manque d'appetit, Infections Severes, Regles douloureuses, vertiges",
//     },
//     {
//         id: 2,
//         name: "Tetra-Bio Forte",
//         picture: "products/p2.jpg",
//         category: "Gelules",
//         price: "4500",
//         description: "Hemorroides, Muges, Maux de ventre, infections vaginales, faiblesse sexuelle",
//     },    
//     {
//         id: 3,
//         name: "Pommade MALEPKO",
//         picture: "products/p3.jpg",
//         category: "Pommade",
//         price: "3500",
//         description: "Entorses, Maux de hanches, Genoux, Pieds d'athletes, Rhumatismes, la fievre",
//     }

// ];