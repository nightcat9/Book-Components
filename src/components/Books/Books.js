import React, {Component} from "react";
import "./Books.scss";
import Book from "../Book/Book";
import axios from "axios";

class Books extends Component {
    booksEndpoint = "//fwolfeil.bitlampsites.com/wpd/new-final/wp-json/wp/v2/books"

    state = {
        books: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios
            .get(this.booksEndpoint)
            .then(response => {
                console.log('API Response', response);

                this.setState( {
                    posts: response.data,
                    isLoaded: true,
                });
            })
            .catch(err => {
                console.error('API ERROR: ', err)
            })
    }

    render() {
        return (
            <div className="Books">
                {this.state.isLoaded ? '' : <p>Loading...</p>}
                {this.state.books.map( post =>
                    <Book

                    />
                )}
            </div>
        );
    }
}

Books.propTypes = {};

export default Books;