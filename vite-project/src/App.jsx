import { useState } from "react";
import moviesData from "./data/movies";
import Row from "./components/Row";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [fav, setFav] = useState([]);

  const addFav = (movie) => {
    setFav([...fav, movie]);
  };

  const filterMovies = (category) => {
    return moviesData.filter(
      (m) =>
        m.category === category &&
        m.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">NETFLIX</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Banner 1 */}
      <div className="banner">
        <h1>Unlimited Movies 🍿</h1>
      </div>

      <Row title="Trending" movies={filterMovies("Trending")} setFav={addFav}/>
      <Row title="Action" movies={filterMovies("Action")} setFav={addFav}/>
      <Row title="Comedy" movies={filterMovies("Comedy")} setFav={addFav}/>

      {/* Banner 2 */}
      <div className="banner banner2">
        <h1>Watch Anywhere 📱</h1>
      </div>

      <Row title="Horror" movies={filterMovies("Horror")} setFav={addFav}/>
      <Row title="Romance" movies={filterMovies("Romance")} setFav={addFav}/>
      <Row title="Sci-Fi" movies={filterMovies("Sci-Fi")} setFav={addFav}/>

      {/* Favorites */}
      <div className="row">
        <h2>❤️ My List</h2>
        <div className="row-posters">
          {fav.map((movie) => (
            <img key={movie.id} src={movie.image} className="poster" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;