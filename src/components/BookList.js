import  React,{useState} from 'react';
import './BookList.css' ;
import AddBook from './AddBook';

import { Button, Form} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';






 const BookList = (props)=> {

    const  getBook = props.bookData;
    const  getCategory = props.categoriesData;
    const  getPublisher = props.publisherData;

    const [bookName, setBookName]= useState('');
   
    const bookChangeEvent = (event) => {
     
        setBookName( event.target.value);
        event.preventDefault();
        console.log(bookName);
    }

   
    const [list, updateList] = useState(getBook);

    const handleRemove = (BookId) => {
     const newList  = list.filter((bk) => bk.BookId !== BookId);
      updateList(newList);
      console.log(list);
      
    }
   




    //BookDetails 

    // const displayBookData=getBook.map(
    //     (bk)=>{ 
    //         return(  
             
              
    //             <tbody>
    //              <tr key={bk.BookId} >  
               
    //                 <td>{bk.BookId }</td>
    //                 <td>{bk.BookName }</td>
    //                 <td>{bk.CategoriesId }</td>
    //                 <td>{bk.PublisherId }</td>
    //                 <td>{bk.Quantity }</td> 
    //                 <td>
    //                     <Popup  trigger={<Button> Edit</Button>}  position="right center" >
    //                         <div >
    //                         <Form >
    //                             <Form.Group className="mb-3" controlId="formBasicEmail">
    //                                 <Form.Label>BookID</Form.Label>
    //                                 <Form.Control value={bk.BookId}  disabled="disabled" type="text" />
                                    
    //                             </Form.Group>

    //                             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                                 <Form.Label>BookName</Form.Label>
    //                                 <Form.Control value={bk.BookName} onChange={bookChangeEvent} type="text"  />
                                   
    //                             </Form.Group>

    //                             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                                 <Form.Label>CategoriesId</Form.Label>
    //                                 <Form.Control value={bk.CategoriesId} type="text"  />
    //                             </Form.Group>

    //                             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                                 <Form.Label>PublisherId</Form.Label>
    //                                 <Form.Control  value={bk.PublisherId} type="text"  />
    //                             </Form.Group>

    //                             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                                 <Form.Label>Quantity</Form.Label>
    //                                 <Form.Control value={bk.Quantity} type="text" />
    //                             </Form.Group>
                                
    //                             <Button variant="primary" type="submit">
    //                                 Update
    //                             </Button>
    //                         </Form>

    //                         </div>
    //                     </Popup>
                        
    //                  </td>
    //                 <td><Popup  trigger={<Button > Delete</Button>} position="right center" >
    //                         <div >
    //                         <h4>{ "are you sure you want to delete book: " + " " + bk.BookName }</h4>
    //                             <Button onClick={() => handleRemove(bk.BookId)}>Comfirm</Button>                               
    //                         </div>
    //                     </Popup></td>  
                    
    //              </tr>
    //              </tbody>
                           
    //         )
    //     }
    // )

    //nested book show

    const rows = (
        getBook
          .map(x => Object.assign(x, getCategory.find(y => y.CategoriesID === x.CategoriesId)))
          .map(x => Object.assign(x, getPublisher.find(z => z.PublisherId === x.PublisherId)))
          .map(info => (
              <tr key={info.BookId}>
                <td>{info.BookId}</td>
                <td>{info.BookName}</td>
                <td>{info.CategoriesName}</td>
                <td>{info.PublisherName}</td>
                <td>{info.Quantity}</td>
                <td>
                        <Popup  trigger={<Button> Edit</Button>}  position="right center"  modal="true">
                            <div >
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>BookID</Form.Label>
                                    <Form.Control value={info.BookId}  disabled="disabled" type="text" />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>BookName</Form.Label>
                                    <Form.Control value={info.BookName} onChange={bookChangeEvent} type="text"  />
                                   
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CategoriesName</Form.Label>
                                    {/* <Form.Control value={info.CategoriesName} type="text"  /> */}
                                    <div>
                                    <select  value={info.CategoriesName} className="popup-input">
                                        {getCategory.map((item) =>
                                            <option>{item.CategoriesName}</option>
                                        )}
                                    </select>
                                </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PublisherName</Form.Label>
                                    {/* <Form.Control  value={info.PublisherName} type="text"  /> */}
                                    <div>
                                    <select value={info.PublisherName} className="popup-input">
                                        {getPublisher.map((item) =>
                                            <option>{item.PublisherName}</option>
                                        )}
                                    </select>
                                </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control value={info.Quantity} type="text" />
                                </Form.Group>
                                            <br/>
                                      
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>

                              
                            </Form>

                            </div>
                        </Popup>
                        
                     </td>
                    <td><Popup  trigger={<Button > Delete</Button>} position="right center" modal="true">
                            <div >
                                <h3>Delete Book</h3><hr/>
                            <h5>{ "are you sure you want to delete book: " + " " + info.BookName }</h5>
                                <Button onClick={() => handleRemove(info.BookId)}>Comfirm</Button>                               
                            </div>
                        </Popup></td>
               
              </tr>
            )
          )
      )


    //categoriesData

    const displayCategoriesData=getCategory.map(
        (ct)=>{
            return(
                <tbody>
                    <tr key={ct.CategoriesID}>
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
                <tr key={pub.PublisherId}>
                
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

       <AddBook passPublisher={getPublisher} passCategory={getCategory}  />
        
        <h1 className="headName">Book List</h1>

            <h3 >BookDetails</h3>


     
            <table className="flat-table flat-table-1">
       
                <thead>
                    <tr>
                        <th>BookId</th>
                        <th>BookName</th>
                        <th>CategoriesName</th>
                        <th>PublisherName</th>
                        <th>Quantity</th>
                    </tr>
                </thead>            
                        {/* {displayBookData}  */}
                        {rows}
                       
                          
        
            </table>

            
           
            <h3>CategoriesDetails</h3>
            <table className="flat-table flat-table-2">

                <thead>
                   <th>CategoriesID</th>
                    <th>CategoriesName</th>  
                </thead>      
                       {displayCategoriesData}
                          
            </table>

            <h3>PublisherDeatils</h3>
            <table className="flat-table flat-table-3">

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