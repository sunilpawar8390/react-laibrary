import React from 'react';
import './BookList.css' ;



 const BookList = (props)=> {

    const  getBook =props.bookData;
    const  getCategory = props.categoriesData;
    const  getPublisher = props.publisherData;


    // console.log(props.bookData);
    // console.log(props.categoriesData);
    // console.log(props.publisherData);

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