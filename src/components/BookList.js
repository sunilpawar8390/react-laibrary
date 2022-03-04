import React from 'react';
import './BookList.css' ;
import { Button, Form} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



 const BookList = (props)=> {

    const  getBook =props.bookData;
    const  getCategory = props.categoriesData;
    const  getPublisher = props.publisherData;

    const editBookDetails = ()=>{
       console.log(getBook);
    }
    
    const deleteBookDetails = ()=>{
        alert(`this is delete book alert`);
    }


    // console.log(props.bookData)
    // console.log(props.categoriesData)
    // console.log(props.publisherData)

    const displayBookData=getBook.map(
        (bk)=>{
            return(
                <tbody>
                 <tr>                  
                    <td>{bk.BookId }</td>
                    <td>{bk.BookName }</td>
                    <td>{bk.CategoriesId }</td>
                    <td>{bk.PublisherId }</td>
                    <td>{bk.Quantity }</td> 
                    <td>
                        <Popup  trigger={<Button > Edit</Button>} position="right center" >
                            <div >
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>BookID</Form.Label>
                                    <Form.Control type="text" />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>BookName</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CategoriesId</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PublisherId</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>

                            </div>
                        </Popup> 
                     </td>
                    <td><Button onClick={deleteBookDetails}>Delete</Button></td>  
                    
                 </tr>
                 </tbody>
                           
            )
        }
    )


    //categoriesData

    const displayCategoriesData=getCategory.map(
        (ct)=>{
            return(
                <tbody>
                    <tr>
                    <td>{ct.CategoriesID }</td>
                    <td>{ct.CategoriesName }</td> 
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>  

                    </tr>                   
                </tbody>
            )
        }
    )

// publisherDeatils

const displayPublisherData=getPublisher.map(  
    (pub)=>{
        return(
            <tbody>
                <tr>
                <td>{pub.PublisherId }</td>
                <td>{pub.PublisherName }</td>
                <td><Button>Edit</Button></td>
                <td><Button>Delete</Button></td> 
                </tr>
            </tbody>
        )
    }
)





  return (
    <div className="App">
        
     <h1 className="headName">Book List</h1>

     <h3>BookDetails</h3>
     
   <table class="flat-table flat-table-1">
            <thead>
                <tr>
                    <th>BookId</th>
                    <th>BookName</th>
                    <th>CategoriesId</th>
                    <th>PublisherId</th>
                    <th>Quantity</th>
                </tr>
             </thead>


                
                    {displayBookData}   
                


            </table>
           
            <h3>CategoriesDetails</h3>
            <table class="flat-table flat-table-2">

                <thead>
                   <th>CategoriesID</th>
                    <th>CategoriesName</th>  
                </thead>

              
                     {displayCategoriesData}
                
                       
                
            </table>

            <h3>PublisherDeatils</h3>
            <table class="flat-table flat-table-3">

                <thead>
                    <th>PublisherId</th>
                    <th>PublisherName</th>  
                 </thead>

               
                    {displayPublisherData}
                
          </table>

          
      
          </div>
   
  );
}

export default BookList;