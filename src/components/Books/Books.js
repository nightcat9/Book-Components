import React, {Component} from "react";
import "./Books.scss";
import Book from "../Book/Book";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

class Books extends Component {
    booksEndpoint = "//fwolfeil.bitlampsites.com/wpd/new-final/wp-json/wp/v2/book";

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
                    books: response.data,
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
                <Row>
                    {this.state.books.map( book =>
                        <Col>
                            <Book
                                title={book.title.rendered}
                                body={book.content.rendered}
                                key={book.id}
                            />
                        </Col>

                    )}
                </Row>
            </div>
        );
    }
}

Books.propTypes = {};

export default Books;