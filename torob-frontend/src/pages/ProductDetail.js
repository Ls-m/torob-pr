import React from 'react';
import { useParams } from "react-router";
import Data from "../data.json";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from 'react';

const Product = () => {
    const { id } = useParams();
    let myData = Data.data;
    const a = myData[id];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // <div>{id}</div>
        <>
            <div className='d-flex m-4 p-4' style={{ "backgroundColor": "white" }}>
                <div className='col-3'>
                    <img src={a.img} />
                </div>
                <div className='d-flex flex-column' style={{ "maxWidth": "40%" }}>
                    <div className='m-2'>
                        <h2>{a.title}</h2>
                    </div>
                    <div>
                        <h2>R$ {a.price}</h2>
                    </div>
                    <button className="btn btn-success mt-2" type="button">Buy Now</button>
                    <button className="btn btn-primary mt-2" type="button" onClick={handleShow}>More Info</button>

                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{"border-bottom": "0 none"}}>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Modal.Body>
                <Modal.Footer style={{"border-top": "0 none"}}>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>

    );

}

export default Product