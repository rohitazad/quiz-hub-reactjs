import React from 'react';
import './contact.scss';
import ListGroup from 'react-bootstrap/ListGroup';


const Contact = ()=>{
    return (
        <>
            <div className="contactWrap">
                <h1>Contact us :- </h1>
                <ListGroup className="contactlist">
                    <ListGroup.Item disabled><span>Mobile No:- </span> <span>+91-9953878727</span></ListGroup.Item>
                    <ListGroup.Item>
                        <span>Email ID:- </span> <span>ram9953878727@gmail.com</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span>
                            <a  href="https://twitter.com/rohitazad"   target="_blank" rel="noreferrer">Follow us on facebook</a> 
                        </span> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                         <span>
                            <a  href="https://www.linkedin.com/in/rohitazad/"  target="_blank" rel="noreferrer">Follow us on linkedin</a>    
                        </span> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <span>
                            <a href="https://www.instagram.com/rohit_azad_malik/" rel="noreferrer"  target="_blank" >Follow on instagram</a>
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <span>
                            <a  href="https://wa.me/+919953878727?text=Hi  Rohit " rel="noreferrer"  target="_blank">Write to message me in wahtsapp</a>
                            </span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </>
    )
}

export default Contact;