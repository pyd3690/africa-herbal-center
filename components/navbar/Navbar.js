import Link from 'next/link'
import { useRouter } from 'next/router'
import {Navbar, Nav} from "react-bootstrap"
import styles from "./Navbar.module.scss"

export default function NavBar(props) {
    const router = useRouter()
    const currentRoute = router.asPath

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img
                    src="/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home" ><span className={styles.title}>Africa Herbal Center</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" activeKey={currentRoute}>
                    <Link href="/" passHref>
                        <Nav.Link href="#Home" className={styles.item}><span className={styles.link} id="home">Accueil</span></Nav.Link>
                    </Link>
                    <Link href="/store" passHref>
                        <Nav.Link href="#Store" className={styles.item}><span className={styles.link} id="store">Boutique</span></Nav.Link>
                    </Link>
                    <Link href="/blog" passHref>
                        <Nav.Link href="#Blog" className={styles.item}><span className={styles.link} id="blog">Decouverte</span></Nav.Link>
                    </Link>
                    <Link href="/contact" passHref>
                        <Nav.Link href="#contact" className={styles.item}><span className={styles.link} id="contact">Contact</span></Nav.Link>
                    </Link>
                </Nav>

                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        <Navbar.Brand href="#home">
                            <img
                                src="/panier2.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <span className={styles.basket}>{props.totalBasket} FCFA</span>
                        </Navbar.Brand>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}