import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import axios from "axios";
import "./SearchBook.css";

export const SearchBook = () => {
  const [book, setBook] = useState([]);
  const [category, setcategory] = useState([]);
  const [publisher, setpublisher] = useState([]);

  useEffect(() => {
    //Get BooksDetails to api call

    axios.get(`http://localhost:8080/api/BooksDetails`).then((res1) => {
      const bkData = res1.data;
      setBook(bkData);
    });

    //get CategoryData to api call

    axios.get(`http://localhost:8080/api/categorydetails`).then((res2) => {
      const catData = res2.data;
      setcategory(catData);
    });

    //get PublisherData to api call

    axios.get(`http://www.localhost:8080/api/publisherdetails`).then((res3) => {
      const pubData = res3.data;
      setpublisher(pubData);
    });

   //search book api call
    
       
   
  }, []);

  // console.log(book);
  // console.log(category);
  // console.log(publisher);



 

  //search book input get data usestate 

const [inputData, setinputData] = useState('');


 const onChangeSubmit=(event)=>{
  setinputData(event.target.value)
 }

const handleSubmit =(i) =>{
  
  i.preventDefault();
  axios.get(`http://localhost:8080/api/BooksDetails/Search/${inputData}`).then((res4) => {
    const searchData = res4.data;
    console.log(searchData);        
  });
  //console.log(inputData);
 
} 


  return (
    <Container>
      <Row>
        <Form >
          <Col md="3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search Book </Form.Label>
              <Form.Control type="text" placeholder="Enter Book Name here.."   onChange={onChangeSubmit}/>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Search</Form.Label>
              <select className="dropdown-style">
                <option>Select Category</option>
                {category.map((cat) => {
                  return <option>{cat.Name}</option>;
                })}
              </select>
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Publisher Search</Form.Label>

              <select className="dropdown-style">
              <option>Select Publisher</option>
                {publisher.map((pub)=>{
                  return(
                    <option>{pub.Name}</option>
                  )
                })}
                
               
              </select>
            </Form.Group>
          </Col>

          <Col md="3">
            <Button onClick={handleSubmit}>Search</Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default SearchBook;
