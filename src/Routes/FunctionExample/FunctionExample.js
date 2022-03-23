import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import axios from "axios";
import FunctionBookList from "./FunctionBookList";
import Home from "../Home";
import "./FunctionExample.css";

const FunctionExample = () => {
  //set data
  const [posts, setPosts] = useState([]);
  const [category, setcategory] = useState([]);
  const [publisher, setpublisher] = useState([]);

  //State For Search Records
  const [inputData, setinputData] = useState("");
  const [inputDataCategory, setinputDataCategory] = useState("");
  const [inputDataPublisher, setinputDataPublisher] = useState("");

  //get CategoryData to api call
  function getBookData() {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8080/api/BooksDetails");
      setPosts(res.data);
    };
    fetchPosts();
  }

  //get CategoryData to api call
  function getCatData() {
    axios.get(`http://localhost:8080/api/categorydetails`).then((res2) => {
      const catData = res2.data;
      setcategory(catData);
    });
  }

  //get PublisherData to api call
  function getPubData() {
    axios.get(`http://www.localhost:8080/api/publisherdetails`).then((res3) => {
      const pubData = res3.data;
      setpublisher(pubData);
    });
  }

  //Book Dele to api call
  const onHandelRemove = (BDID, Bookname) => {
    fetch("http://localhost:8080/api/BooksDetails/delete/" + BDID, {
      method: "GET",
    }).then((result) => {
      result.json().then((res) => {
        getBookData();
      });
    });
  };

  useEffect(() => {
    getBookData();
    getCatData();
    getPubData();
  }, []);

  const onChangeSubmit = (event) => {
    setinputData(event.target.value);
  };

  const onChangeCategory = (event) => {
    setinputDataCategory(event.target.value);
  };

  const onChangePublisher = (event) => {
    setinputDataPublisher(event.target.value);
  };

  console.log(inputData);
  console.log(inputDataCategory);
  console.log(inputDataPublisher);

  const handleSubmit = (i) => {
    i.preventDefault();
    if (inputData) {
      axios
        .get(`http://localhost:8080/api/BooksDetails/Search/${inputData}`)
        .then((res4) => {
          const searchData = res4.data;

          setPosts(searchData);
        });
    } else if (inputDataCategory) {
      axios.get(`http://localhost:8080/api/BooksDetails/Search1/${inputDataCategory}`)
        .then((res4) => {
          const searchData = res4.data;
          setPosts(searchData);
          setinputData("");
        });
    } else if (inputDataPublisher){
      axios.get(`http://localhost:8080/api/BooksDetails/Search2/${inputDataPublisher}`)
      .then((res4) => {
        const searchData = res4.data;
        setPosts(searchData);
        setinputData("");
      });
    }else{
      alert(`required fileds`)
    }
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
                <select className="dropdown-style" onChange={onChangeCategory}>
                  <option>Select Category</option>
                  {category.map((cat) => {
                    return <option key={cat._id}>{cat.Name}</option>;
                  })}
                </select>
              </Form.Group>
            </Col>

            <Col md="3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Publisher Search</Form.Label>

                <select className="dropdown-style" onChange={onChangePublisher}>
                  <option>Select Publisher</option>
                  {publisher.map((pub) => {
                    return <option key={pub._id}>{pub.Name}</option>;
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

      <FunctionBookList posts={posts} ondelete={onHandelRemove} />
    </div>
  );
};

export default FunctionExample;
