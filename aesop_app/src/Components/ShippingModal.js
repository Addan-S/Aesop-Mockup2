import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import './Styles/ShippingModal.css'


function ShippingModal() {

    const [lgShow, setLgShow] = useState(false);

    return (
        
    <>
    {/* MODAL BUTTON */}
        <Button 
            onClick={() => setLgShow(true)}
            variant='dark'
            size='lg'
            block
        >Complementary shipping on all orders +</Button>


    {/* MODAL */}
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
        >
        <Modal.Header closeButton>
        <Modal.Body className='modal-body'>
            <Container>
            <h4>Shipping fees and delivery times</h4>
            <br />
            </Container>
            <hr />
            <br />
            <Container className='standard-ship'>
                <Row>
                    <Col sm={8}>
                        <h4>Standard Shipping</h4>
                    </Col>
                    <Col sm={4} className='right-col'>
                        <p>Complimentary</p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={12}>
                        <p>2-4 business days</p>
                    </Col>
                    <Col sm={12}>
                        <p>Order by TODAYS DATE to ensure delivery by 6 DAYS OUT</p>
                    </Col>
                </Row>
                <br />
            </Container>
            <hr />
            <br />
            <Container className='next-day-ship'>
                <Row>
                    <Col sm={8}>
                        <h4>Next Day Shipping</h4>
                    </Col>
                    <Col sm={4} className='right-col'>
                        <p>$35</p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={12}>
                        <p>Order by 12PM ET for delivery on the next working days</p>
                    </Col>
                </Row>
                <br />
            </Container>
            <hr />
        </Modal.Body>
        </Modal.Header>
        </Modal>
    </>
    );
}

export default ShippingModal;