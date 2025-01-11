import { Main } from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Post } from "./pages/Post/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services/new" element={<Post />} />
      </Routes>
    </Router>
  )
}

export default App;
