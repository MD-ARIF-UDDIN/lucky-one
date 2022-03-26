import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Shop";
import Ques from "./components/Ques/Ques";

function App() {
  return (
    <div className="App">
      <h1>Food Choice</h1>
      <Shop></Shop>
      <Ques></Ques>
    </div>
  );
}

export default App;

