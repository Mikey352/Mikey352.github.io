import React from "react";
import "./App.css";
import Bear from "./Bear";
import Cheetah from "./Cheetah";
import Elephant from "./Elephant";
import Ostrich from "./Ostrich";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import zooImg from "./zoo.jpeg";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Mike's Zoo</h1>
          <Navigation />
        </header>
        <main>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bear" element={<Bear />} />
              <Route path="/cheetah" element={<Cheetah />} />
              <Route path="/elephant" element={<Elephant />} />
              <Route path="/ostrich" element={<Ostrich />} />
            </Routes>
          </section>
        </main>
        <footer>
          <p>Mike's Zoo Website 2024</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Mike's Zoo!</h1>
        <h1>Please take a look and familiarize yourself with our website!</h1>
        <Navigation />
      </header>
      <main>
        <section>
          <img
            src={zooImg}
            alt="Cheetah"
            style={{ width: "500px", height: "300px" }}
          />
          <h2>About Us</h2>
          <p>
            Welcome to Mike's zoo website! We're ecstatic to have you here
            exploring the wonders of the animal kingdom with us. Whether you're
            a seasoned zoo visitor or just starting your journey into the wild
            world of wildlife, our website is designed to engage and educate
            visitors of all ages. From majestic lions to playful otters, our
            virtual zoo offers a glimpse into the diverse and fascinating
            creatures that inhabit our planet. So, grab your safari hat and
            embark on an adventure with us as we celebrate the beauty and
            diversity of our natural world. We hope you enjoy your stay and come
            back often to discover new animal friends and exciting updates from
            our zoo!
          </p>
        </section>
      </main>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bear">Bear</Link>
        </li>
        <li>
          <Link to="/cheetah">Cheetah</Link>
        </li>
        <li>
          <Link to="/elephant">Elephant</Link>
        </li>
        <li>
          <Link to="/Ostrich">Ostrich</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
