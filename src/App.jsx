import './App.css';
import Nav from "./Nav";
import Post from "./Post";
import Create from "./Create";
import { Routes, Route } from "react-router-dom";

function App() {
  const key = prompt("Enter pass key to create message: Note if passkey matches you can create message if not you can only read message")
  return (
    <div className="App">
      <div className="double-section">
        <Routes>
          <Route path="/" element={<Post />} />
          {key === "1290" ? <Route path="/create" element={<Create />}/> : alert("Pass key not correct") }
        </Routes>
      </div>
    </div>
  );
}

export default App;
