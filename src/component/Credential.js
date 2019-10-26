import React, { useState, useEffect } from 'react'
import { Modal, Button, Spinner, Table, Alert } from 'react-bootstrap'
export default function Credential(props) {
    const [ cvv, setCvv] = useState(0)
    const [ name , setName] = useState("harisu")
    const [ expires, setExpire] = useState( new Date());

    return (
        <div className="container">
            <Alert variant="success" dismissible>
                Success!!! Thank you for trusting us
            </Alert>
            <p>  Use the following Card details from momouniverse to purchase online </p>
            <Table striped bordered  className="site-primary-color">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>CVV</th>
                    <th>Expire on</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Harisu</td>
                    <td>Fanyui</td>
                    <td>212</td>
                    <td>{new Date().toDateString()}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MoMo</td>
                    <td>Univers</td>
                    <td>009</td>
                    <td>{new Date().toDateString()}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">One man army</td>
                    <td>520</td>
                    <td>{new Date().toDateString()}</td>
                </tr>
                
            </tbody>
</Table>
<div className="pull-right"> Download</div>
        </div>
    )
}


export function NotifyBackMomoApproval(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcentern" className="site-primary-color">
                    Notificatio for Payment
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>MoMo payment innitiated</h4> {props.processing &&<Spinner animation="border" />}
                <p>
                 Dail,<code>*126#</code> To approve the transaction of {props.price} FCFA on the number {props.number},
        </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={props.onHide} className="site-primary-color">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}