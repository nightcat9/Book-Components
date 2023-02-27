import './App.scss';
import Posts from "./components/Posts/Posts";
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <div className="App">
        <div className="container">
            <Posts />
        </div>
    </div>
  );
}

export default App;
