import React from "react";
import PropTypes from 'prop-types';
import './Book.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

const Book = (props) => (
    <div className="Book">
        <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <p dangerouslySetInnerHTML={{__html: props.body}}/>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

Book.propTypes = {
    "title": PropTypes.string,
    "body": PropTypes.string,
}

Book.defaultProps = {
    "title": "Book Title",
    "body": "Book body"
};

export default Book;