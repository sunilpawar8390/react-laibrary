import React,{useState} from 'react';
import './AddBook.css'
import { Button, Form} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';






const AddBook = (props, prefix='id') => {

    const showCategories = props.passCategory;
    const showPublisher = props.passPublisher;

    
    

    return (
       
        
        <Popup  trigger={<Button> Add New Book </Button>}  position="right center"  modal="true">
            
        <div >
           
            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >BookID</Form.Label>
                                    <Form.Control  type="text" />
                                    
                                </Form.Group>

                                

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>BookName</Form.Label>
                                    <Form.Control type="text"  />
                                   
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Categories Name</Form.Label>
                                  
                                    <div>
                                    <select   className="popup-input">
                                        {showCategories.map((c) =>
                                            <option>{c.CategoriesName}</option>
                                            
                                        )}
                                         <p>Add New Categories</p>
                                    </select>
                                    <p>Add New Categories</p>
                                </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Publisher Name</Form.Label>
                                  
                                    <div>
                                    <select   className="popup-input">
                                        {showPublisher.map((p) =>
                                            <option>{p.PublisherName}</option>
                                           
                                        )}
                                         
                                    </select>
                                    <p>Add New Publisher</p>
                                </div>
                                </Form.Group>

                               

                             

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control  type="text" />
                                </Form.Group>
                                            <br/>
                                      
                                <Button variant="primary" type="submit">
                                   Add Book
                                </Button>

                              
                            </Form>
                           
        </div>
        </Popup>
    );
}

export default AddBook;