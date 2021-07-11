import Link from 'next/link'
import { Jumbotron, Button} from "react-bootstrap"
import { RichText} from "prismic-reactjs"
import styles from "./Contact.module.scss"
import Moment from "react-moment";
import 'moment/locale/fr';

Moment.globalLocale = 'fr';

export default function COntactSection(props) {
    

    return(
        <div className={styles.section}>
            <div className={styles.container}>
            <Jumbotron style={{backgroundColor:'#d8f0ea'}}>
                <h2 className={styles.title}>Besoin d&apos;un traitement naturel ou d&apos;une consultation?</h2>
                <h3 className={styles.action}>N&apos;hesitez pas a nous contacter</h3>
                <p>
                <Link href={"/contact"} passHref><Button variant="success">Nous Contacter</Button></Link>
                </p>
            </Jumbotron>
            </div>
        </div>
    )
}

