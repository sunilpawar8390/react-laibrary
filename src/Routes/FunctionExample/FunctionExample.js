import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import axios from "axios";
import FunctionBookList from "./FunctionBookList";
import Home from "../Home";
import "./FunctionExample.css";

const FunctionExample = () => {

   function getBookData(){
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8080/api/BooksDetails");
      setPosts(res.data);
    }

    fetchPosts();
  };

  useEffect(() => {
    //get CategoryData to api call       
    getBookData();

    axios.get(`http://localhost:8080/api/categorydetails`).then((res2) => {
      const catData = res2.data;
      setcategory(catData);
    });

    //get PublisherData to api call

    axios.get(`http://www.localhost:8080/api/publisherdetails`).then((res3) => {
      const pubData = res3.data;
      setpublisher(pubData);
    });
  }, []);

  //State For Pagination
  const [posts, setPosts] = useState([]);
  const [category, setcategory] = useState([]);
  const [publisher, setpublisher] = useState([]);

  //State For Search Records
  const [inputData, setinputData] = useState("");
  // const [inputDataCategory, setinputDataCategory] = useState("");
  // const [inputDataPublisher, setinputDataPublisher] = useState("");


  const onChangeSubmit = (event) => {
    setinputData(event.target.value);
    // setinputDataCategory(event.target.value);
    // setinputDataPublisher(event.target.value);
  
  };

    console.log(inputData);
    // console.log(inputDataCategory);
    // console.log(inputDataPublisher);

  const handleSubmit = (i) => {
    i.preventDefault();
    
      axios
      .get(`http://localhost:8080/api/BooksDetails/Search/${inputData}`)
      .then((res4) => {
        const searchData = res4.data;
        setPosts(searchData);
        setinputData('');
      });


      // axios
      // .get(`http://localhost:8080/api/BooksDetails/Search1/${inputDataCategory}`)
      // .then((res4) => {
      //   const searchData = res4.data;
      //   setPosts(searchData);
      //   setinputData('');
      // });

      // axios
      // .get(`http://localhost:8080/api/BooksDetails/Search1/${inputDataPublisher}`)
      // .then((res4) => {
      //   const searchData = res4.data;
      //   setPosts(searchData);
      //   setinputData('');
      // });



  
   
  };

  return (
    <div>
      <Home />

      {/* Search Book Pannel  */}
      <Container>
        <Row>
          <Form>
            <Col md="3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search Book </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Book Name here.."
                  onChange={onChangeSubmit}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>

            <Col md="3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Search</Form.Label>
                <select className="dropdown-style"  onChange={onChangeSubmit}>
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

                <select className="dropdown-style"  onChange={onChangeSubmit}>
                  <option>Select Publisher</option>
                  {publisher.map((pub) => {
                    return <option>{pub.Name}</option>;
                  })}
                </select>
              </Form.Group>
            </Col>

            <Col md="3">
              <Button onClick={handleSubmit}>Search</Button>
            </Col>
            <Col md="3">
              <Button type="reset" onClick={getBookData}>
                Reset
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>

      <FunctionBookList posts={posts} />
    </div>
  );
};

export default FunctionExample;
