import React, { useState } from "react";
import { Row, Col, Container ,Button } from "react-bootstrap";

const Pagination = ({ postsPerPage, totalPosts, paginate, pagenumber }) => {
  //postsPerPage = 2  totalPosts=6 , paginate =
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    console.log(i);
  }



  return (
    <Container>
      <Row>
        <Col md="8">
          
            
            <Button disabled={pagenumber <= 1} onClick={()=>{paginate( pagenumber - 1) }} href='#' >Previous</Button>
              {pageNumbers.map((number) => (
                <Button key={number} className="page-item"
                  
                    onClick={() => paginate(number)}
                    href="#"
                   
                  >
                    {number}
                  
                </Button>
              ))}

            <Button disabled={pagenumber >=  Math.ceil(totalPosts / postsPerPage)} onClick={()=>{paginate( pagenumber + 1) }} href='#' >Next</Button>
           
          
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination;
