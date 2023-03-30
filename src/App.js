import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Comments from "./pages/comments";
import Posts from "./pages/posts";
import Navigation from "./components/nav/nav";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Navigation />
        <main>
          <Routes>
              < Route index element = {<Home/>} />
              < Route path="/products" element={<Products />} />
              < Route path="/posts" element={<Posts />} />
              < Route path="/comments" element={<Comments />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
