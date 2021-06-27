import {Navbar, Nav} from "react-bootstrap"
import styles from "./Footer.module.scss"

export default function FooterBar() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home" className="ml-auto mr-2">
                <img
                    src="/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand className={styles.footerText}>Africa Herbal Center Copyright &#169; {(new Date()).getFullYear()} <br/> <span className={styles.author}>Powered By IgniTouch</span></Navbar.Brand>
        </Navbar>
    )
}