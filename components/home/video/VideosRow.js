import Link from 'next/link'
import { Image, Card, Badge, Button} from "react-bootstrap"
import { RichText} from "prismic-reactjs"
import styles from "./VideosRow.module.scss"
import Moment from "react-moment";
import 'moment/locale/fr';
import ReactPlayer from 'react-player'

Moment.globalLocale = 'fr';


const videos = [
    {
        id: 1,
        url: "https://youtu.be/qg0pPWhfXq4",
        title: "Atelier sur les plantes médicinales et leurs vertus, Togo/août 2019",
        date: "07/05/2021",
    },
    {
        id: 2,
        url: "https://youtu.be/taZHxeyQS-I",
        title: "Se soigner avec les plantes",
        date: "07/07/2021",
    },
    {
        id: 3,
        url: "https://youtu.be/OBd-6LdKyTc",
        title: "L'éjaculation précoce : Traitement définitif avec les plantes",
        date: "07/09/2021",
    },

]

export default function VideoRowSection(props) {
    const videos = props.videos;
    const card_items = videos.map((card) =>
    <Card className={styles.cardContainer} key={card.id} >
        {/* <Card.Img variant="top" src={card.picture} className={styles.cardImg}/> */}
            <ReactPlayer
                className={styles.cardImg}                  
                url= {card.url}
                width = '100%'
                height = '300px'
                controls 
            /> 
            <Card.Body>
            <Card.Title className={styles.cardTitle}>
                { card.title /*RichText.render(card.title)*/}
            </Card.Title>
            {(card.date !== null && card.date !== undefined) &&
                <Card.Text className={styles.cardContent}>
                
                <Moment fromNow locale='fr'>
                    {card.date}
                </Moment>
                </Card.Text>
            }     
            <a href={card.url /*"/products/"+card.id*/} target="_blank"> 
                <Button variant="success" >Voir</Button>
            </a>        
        </Card.Body>
    </Card>
    );

    return(
        <div className={styles.section}>
            <h2 className={styles.title}>Nos dernieres Videos</h2>
            <Link href={"/blog"} passHref><h3 className={styles.action}>Voir toutes nos videos</h3></Link>
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