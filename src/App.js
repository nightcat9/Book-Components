import './App.scss';
import Posts from "./components/Posts/Posts";
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import Books from "./components/Books/Books";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Posts />
            <Books />
        </div>
    </div>
  );
}

export default App;
