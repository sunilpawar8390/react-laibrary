import React, { useEffect, useState} from "react";
import { Button, Form, Row, Col, Container, FormLabel } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import Home from "../Home";
import "./EditBook.css";

function EditBook() {

  const [msg, setMsg] = useState('');
  const [exist, setExist] = useState('');
  const [editMsg, seteditMsg] = useState('');

//set categoriesData
const [cat, setCat] = useState([]);

//set publisherData
const [pub, setPub] = useState([]);


    let navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const {bookId} = useParams();

    const isAdd = !bookId;

    useEffect(() => {
      if(!isAdd) {
        axios.get(`http://localhost:8080/api/BooksDetails/${bookId}`).then((res1) => {
          const bookDataState = res1.data;
          console.log(bookDataState);
          const fields = ['BDID', 'Bookname', 'Category', 'Publisher', 'quantity'];
          fields.forEach(field => setValue(field, bookDataState[field]));
        });
      }
    });

    //get categoriesData to api call.

  useEffect(() => {
    axios.get(`http://localhost:8080/api/categorydetails`).then((res2) => {
      const catData = res2.data;
      setCat(catData);
    });
  }, []);

  //console.log(cat);

  //get PublisherData to api call

  useEffect(() => {
    axios.get(`http://www.localhost:8080/api/publisherdetails`).then((res3) => {
      const pubData = res3.data;
      setPub(pubData);
    });
  }, []);

    function onSubmit(data) {
      return isAdd ? createUser(data) : updateUser(bookId, data);
    }

    function createUser(data) {
      const addData = {
        data: data
      };
      axios.post('http://localhost:8080/api/BooksDetails/add/' , addData)
      .then((res) => {
        console.log(res.data.status);
        console.log(res.data.exist);
        setMsg(res.data.status);
        setExist(res.data.exist);
      });

    }

    function updateUser(id, data) {
      
      const editData = {
        id: id,
        data: data
      };
      axios.post('http://localhost:8080/api/BooksDetails/edit/' , editData)
      .then((res) => {
        console.log(res.data.status);
        seteditMsg(res.data.status);

      });

    }
    

    return (
      
      <Container>
        <Home/><br/>
        <Row><br/>
          <Col md="10">
            <label>Add Book and Edit Book Form </label>
           
          </Col>
          <Col md="2">
            <Button onClick={() => {navigate("/classexample")}}>Back</Button>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit(onSubmit)} className="AddBook-popup">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>BookID</Form.Label>
            <Form.Control name="BDID" type="text"   placeholder="Enter Book Id" {...register('BDID')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>BookName</Form.Label>
            <Form.Control name="Bookname" type="text"  placeholder="Enter Book Name" {...register('Bookname')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Category</Form.Label>
          <select className="cat_Style" {...register("Category.Name")}>
            <option>Select Category</option>
            {cat.map((catItem) => {
              return <option key={catItem._id}>{catItem.Name}</option>;
            })}
          </select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Publisher</Form.Label>
          <select className="cat_Style" {...register("Publisher.Name")}>
            <option>Select Publisher</option>
            {pub.map((pubItem) => {
              return <option key={pubItem._id}>{pubItem.Name}</option>;
            })}
          </select>
        </Form.Group>

       

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control name="quantity" type="text"  placeholder="Add Quantity" {...register('quantity')} />
          </Form.Group>

          <Button variant="primary" type="submit">
          Save
          </Button>   
          <FormLabel>{msg} {exist} {editMsg}<Link to={`/classexample`}>Go to back Page</Link> </FormLabel>
        </Form>
      </Container>
    );
}

export default EditBook

