import  React from 'react';
import './BookList.css' ;
import AddBook from './AddBook';

import { Button, Form} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



 

  
export default class BookList extends React.Component {
        constructor(props){
            super(props);
            this.state = {
               
              
            }
       
        } 



render() { 
    const { bookData, categoriesData, publsiherData} = this.props;

    const rows = (
        bookData
          .map(x => Object.assign(x, categoriesData.find(y => y.CategoriesID === x.CategoriesId)))
          .map(x => Object.assign(x, publsiherData.find(z => z.PublisherId === x.PublisherId)))
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
                            <Form  className="AddBook-popup">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>BookID</Form.Label>
                                    <Form.Control value={info.BookId}  disabled="disabled" type="text" />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>BookName</Form.Label>
                                    <Form.Control value={info.BookName}  type="text"  />
                                   
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CategoriesName</Form.Label>
                                    {/* <Form.Control value={info.CategoriesName} type="text"  /> */}
                                    <div>
                                    <select  value={info.CategoriesName} className="popup-input">
                                        {categoriesData.map((item) =>
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
                                        {publsiherData.map((item) =>
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
                                <Button >Comfirm</Button>                               
                            </div>
                        </Popup></td>
               
              </tr>
            )
          )
      )

       //categoriesData

    const displayCategoriesData=categoriesData.map(
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

    const displayPublisherData=publsiherData.map(  
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

    <AddBook passPublisher={publsiherData} passCategory={categoriesData}  />
     
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
}


 