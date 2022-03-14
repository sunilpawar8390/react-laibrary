import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDataState: [],
      categoriesDataState: [],
      publisherDataState: [],
    };
  }

  componentDidMount() {
    this.callBookApi();
    this.callCategoriesApi();
    this.callPublsiherApi();
  }

  callBookApi() {
    axios.get(`http://localhost:8000/api/BooksDetails`).then((res1) => {
      const bookDataState = res1.data;
      this.setState({ bookDataState });
    });
  }

  callCategoriesApi() {
    axios.get(`http://localhost:8000/api/CategoriesDetails`).then((res2) => {
      const categoriesDataState = res2.data;
      this.setState({ categoriesDataState });
    });
  }

  callPublsiherApi() {
    axios.get(`http://localhost:8000/api/PublisherDeatils`).then((res) => {
      const publisherDataState = res.data;
      this.setState({ publisherDataState });
    });
  }

  onHandelRemove = (BookId) => {
    fetch("http://localhost:8000/api/BooksDetails/delete/" + BookId, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        this.props.ondelete();
      });
    });
  };

  render() {
    const { bookDataState, categoriesDataState, publisherDataState } =
      this.state;
    return (
      <div className="App">
        <BookList
          bookData={bookDataState}
          categoriesData={categoriesDataState}
          publsiherData={publisherDataState}
          ondelete={this.onHandelRemove}
        />
      </div>
    );
  }
}

export default App;
