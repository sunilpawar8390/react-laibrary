
import './App.css';
import BookList from './components/BookList'


function App() {
 
   const BooksDetails =  [
    {
      BookId : 1,
      BookName: 'React',
      CategoriesId: 1,
      PublisherId:1,
      Quantity:100,
    },

    {
      BookId :2,
      BookName: 'Anguler',
      CategoriesId: 1,
      PublisherId:1,
      Quantity: 60,
    },

    {
      BookId :3,
      BookName: 'HTML',
      CategoriesId:2,
      PublisherId:2,
      Quantity:120,
    },

    {
      BookId :4,
      BookName: 'Node',
      CategoriesId:3,
      PublisherId:3,
      Quantity:25,
    },
  ]

  const CategoriesDetails =[
    {
      CategoriesID: 1,
      CategoriesName: 'Programming',
    },

    {
      CategoriesID: 2,
      CategoriesName: 'UI',
    },

    {
      CategoriesID: 3,
      CategoriesName: 'Database',
    },
  ]

  const PublisherDeatils =[
    {
      PublisherId:1,
      PublisherName:'ABC',
    },

    {
      PublisherId:2,
      PublisherName:'PQR',
    },

    {
      PublisherId:3,
      PublisherName:'XYZ',
    },
  ]



  // console.log(BooksDetails);
  // console.log(CategoriesDetails);
  // console.log(PublisherDeatils);

  return (
    <div className="App">
     <BookList bookData={BooksDetails} categoriesData={CategoriesDetails} publisherData={PublisherDeatils} />

    </div>
  );
}

export default App;
