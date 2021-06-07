import React,{ useState } from 'react';
import emailjs from 'emailjs-com';
import { Form,Row,Col,Button,Container} from 'react-bootstrap'


// import './ContactUs.css';

export default function ContactUs() {

   const [user_name, setName] = useState('');
   const [user_email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const  sendEmail= (e) => {
    e.preventDefault();
    if(user_name === "" || user_name === null)
    alert("Please provide name");
    else if(user_email === "" || user_email === null)
    alert("Please provide email");
    else if(message === "" || message === null)
    alert("Please provide message");
    else {
    emailjs.sendForm('service_zdrgl8y', 'template_vf7dgma', e.target, 'user_489Ax7gnUxmxSol8Edmje')
      .then((result) => {
          alert("Email Send Successfully...")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  return (
      <React.Fragment>
      <Container style={{marginLeft:300,marginTop:50,width:"60%"}} fluid="sm">
     <Form onSubmit={sendEmail}>
          <Form.Group as={Row}  >
              <Form.Label column sm={2}>
               Name
              </Form.Label>
              <Col sm={10}>
              <Form.Control type="text" placeholder="Name" name="user_name" value={user_name} onChange={(e)=>setName(e.target.value)}/>
              </Col>
          </Form.Group>
          <Form.Group as={Row}  >
              <Form.Label column sm={2}>
               Email
              </Form.Label>
              <Col sm={10}>
              <Form.Control type="text" placeholder="Email" name="user_email" value={user_email} onChange={(e)=>setEmail(e.target.value)}/>
              </Col>
          </Form.Group>
          <Form.Group as={Row}  >
              <Form.Label column sm={2}>
               Message
              </Form.Label>
              <Col sm={10}>
              <Form.Control type="textarea" placeholder="Message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
              </Col>
          </Form.Group>
          <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
          </Form>
        </Container>
        </React.Fragment>
  );
}
