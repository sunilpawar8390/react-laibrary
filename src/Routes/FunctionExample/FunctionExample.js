import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import axios from "axios";
import Pagination from './Pagination';

import FunctionBookList from "./FunctionBookList";

const FunctionExample = () => {

 const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:8080/api/BooksDetails');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
      
  }, []);

console.log(posts);


// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <h1>Function example </h1>
      <FunctionBookList posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage} //2
        totalPosts={posts.length}  //6
        paginate={paginate}
        pagenumber={currentPage}
      />
    </div>
  );
};

export default FunctionExample;
