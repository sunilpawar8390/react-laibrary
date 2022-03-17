import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import "./EditBook.css";

function EditBook() {

  
    let navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const {bookId} = useParams();

    const isAdd = !bookId;

    useEffect(() => {
      if(!isAdd) {
        axios.get(`http://localhost:8080/api/BooksDetails/${bookId}`).then((res1) => {
          const bookDataState = res1.data;
          const fields = ['BDID', 'Bookname', 'Category', 'Publisher', 'quantity'];
          fields.forEach(field => setValue(field, bookDataState[field]));
        });
      }
    },[]);

    function onSubmit(data) {
      return isAdd ? createUser(data) : updateUser(bookId, data);
    }

    function createUser(data) {
      console.log(data)
    }

    function updateUser(id, data) {
      console.log(id);
      console.log(data);
    }

    return (
      <Container>
        <Row>
          <Col md="10">
            <label>Edit Book Details</label>
          </Col>
          <Col md="2">
            <Button onClick={() => {navigate("/classexample")}}>Back</Button>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit(onSubmit)} className="AddBook-popup">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>BookID</Form.Label>
            <Form.Control name="BDID" type="text" {...register('BDID')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>BookName</Form.Label>
            <Form.Control name="Bookname" type="text" {...register('Bookname')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category Name</Form.Label>
            <Form.Control name="Category" type="text" {...register('Category.Name')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Publisher Name </Form.Label>
            <Form.Control name="Publisher" type="text" {...register('Publisher.Name')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control name="quantity" type="text" {...register('quantity')} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    );
}

export default EditBook

