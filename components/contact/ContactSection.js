import Link from 'next/link'
import {useState} from "react"
import Image from 'next/image'
import {Alert, Button, Form, FormControl, ListGroup} from "react-bootstrap"
import styles from "./ContactSection.module.scss"


export default function ContactBlock() {
    const [showConfirmation, setshowConfirmation] = useState(false);
    const [type, setType] = useState('Requete/info');
    const [data, setData] = useState({
      name: "",
      phone: "",
      email: "username@example.com",
      subject: "renseignement",
      message: "",
      ctype: "Requete/info",
    });
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    
    function onChange(e) {
        // set the key = to the name property equal to the value typed
        if(e.target.id === "ctype"){
          let selectElement = document.getElementById("ctype");
          let valueSelected = selectElement.options[selectElement.selectedIndex].value; // get selected option value
          const updateItem = (data['ctype'] = valueSelected);
          // update the state data object
          setData({ ...data, updateItem });
        }
        else{
            const updateItem = (data[e.target.id] = e.target.value);
            // update the state data object
            setData({ ...data, updateItem });
        }
    }

    async function sendMessage(event){
        event.preventDefault();
        const form = event.currentTarget;
        var validForm = true;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          validForm = false;
        }
  
        setValidated(true);
        if (!validForm) {
          return;
        }
        setshowConfirmation(true)

        /*
        console.log('sending client message');
        const response = await fetch('https://anais-backend.herokuapp.com/messages', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          setError(response.statusText);
          console.log(response.statusText);
        }
        else{
          setshowConfirmation(true)
        } 
        */   
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.title}> Laissez Nous Un Message et Nous vous recontacterons</h2>
            <Form noValidate validated={validated} onSubmit={sendMessage}>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>Nom</Form.Label>
                    <FormControl
                    placeholder="Nom & Prenoms"
                    aria-label="nom"
                    id="name" required onChange={onChange} 
                    />
                    <Form.Control.Feedback type="invalid">
                    Entrer vos Nom et Prenoms
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>Email</Form.Label>
                    <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    id="email" defaultValue="username@example.com" onChange={onChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>Telephone</Form.Label>
                    <FormControl
                    placeholder="Telephone"
                    aria-label="telephone"
                    id="phone" required onChange={onChange} 
                    />
                    <Form.Control.Feedback type="invalid">
                    Entrer un numero de telephone
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>Comment Vous Assister</Form.Label>
                    <Form.Control as="select" custom id="ctype" required onChange={onChange} value={type}>
                    <option selected value='Requete/info'>Information</option>
                    <option value='Suggestions'>Consultation</option>
                    <option value='RDV'>Rendez Vous</option>
                    <option value='Autre'>Autre</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                    Choisissez une preference
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>Objet</Form.Label>
                    <FormControl
                    placeholder="L'objet de votre message"
                    aria-label="Objet"
                    id = "subject" defaultValue="Renseignement" onChange={onChange}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label className={styles.label}>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} id="message"  required onChange={onChange} />
                    <Form.Control.Feedback type="invalid">
                    Entrer un message
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="warning" type="submit" style={{marginBottom:'20px'}}>
                    Envoyer
                </Button>
                {showConfirmation && 
                    <Alert variant="warning" onClose={() => setshowConfirmation(false)} dismissible autoFocus style={{marginTop: '10px', textAlign: 'center'}}>
                        <Alert.Heading>Votre Message a bien ete envoye. <br />Nous vous contacterons bientot sur le {data.phone} ou via {data.email}.</Alert.Heading>
                        <Link href="/">
                            <p style={{cursor: 'pointer', textDecoration: 'underline'}}>Continer Votre Visite &#62;</p>
                        </Link>
                    </Alert>
                }
            </Form>
            <br /><br />
            <h2 className={styles.title}> Autre Contact</h2>
            <ListGroup>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <Image className={styles.iconC}
                            src="/icons/company.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>Africa Herbal Center</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <Image className={styles.iconC}
                            src="/icons/address.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>39 Rue AnimaBio Lomé, Quartier Bè Pa De Souza</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <Image className={styles.iconC}
                            src="/icons/phone.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>+228 90 23 79 24 / +228 98 40 34 17</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <Image className={styles.iconC}
                            src="/icons/whatsapp.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#whatsapp"><div className={styles.listItemContent}>+228 90 23 79 24 / +228 98 40 34 17</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <Image className={styles.iconC}
                            src="/icons/facebook.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                        
                        /> 
                    </div>
                    <Link href="https://www.facebook.com/anaisconceptbiz/" target="_blank"><div className={styles.listItemContent}>https://www.facebook.com/africaherbalcenter/</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <Image className={styles.iconC}
                            src="/icons/email.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>Africa-herbal@gmail.com</div></Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}