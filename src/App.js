import './App.scss';
import Posts from "./components/Posts/Posts";
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import Books from "./components/Books/Books";
import {Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <div className="container fluid">
            <Posts />
            <Row>
                <Books />
            </Row>
        </div>
    </div>
  );
}

export default App;
