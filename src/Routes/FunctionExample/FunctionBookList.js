import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const FunctionBookList = ({ posts }) => {

 


  const rows = posts.map((bk) => {
    return (
      <tr key={bk.BDID}>
        <td>{bk.BDID}</td>
        <td>{bk.Bookname}</td>
        <td>{bk.Category.Name}</td>
        <td>{bk.Publisher.Name}</td>
        <td>{bk.IsActive.toString()}</td>
        <td>{bk.quantity}</td>

        <td>
          {/* <Link to={`/editbook/${bk.BDID}`} style={{ color: `white` }}>
            <Button variant="primary">Edit</Button>
          </Link> */}

          <Link to={`/editbook/${bk.BDID}`} style={{ color: `white` }}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Link>
        </td>

        <td>
          <Popup
            trigger={
              <i
                className="fa fa-trash"
                aria-hidden="true"
                style={{ color: `red` }}
              ></i>
            }
            position="right center"
            modal="true"
          >
            <div>
              <h3>Delete Book</h3>
              <hr />
              <h5>
                {`{are you sure you want to delete book: ${bk.Bookname}`}
              </h5>
              <Button >
                Comfirm
              </Button>
            </div>
          </Popup>
        </td>
      </tr>
    );
  });

  return (
    <div>

     
    
<Container>
   <Row>
     <Col md="12">
       <h3>BookList Details </h3>
     </Col>
     <Col md="12">
       <Link to="/addbook">
         <Button variant="success">Add New Book</Button>
       </Link>
     </Col>
   </Row>
   <Row>
     <Col>
       <table className="flat-table flat-table-1">
         <tr>
           <th>BookID</th>
           <th>BookName</th>
           <th>Category Name</th>
           <th>Publisher Name</th>
           <th>IsActive</th>
           <th>Quantity</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
         {rows}
       </table>
     </Col>
   </Row>
</Container>

</div>
  );
};

export default FunctionBookList;