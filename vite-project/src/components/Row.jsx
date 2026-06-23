function Row({ title, movies, setFav }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.image} alt={movie.title} className="poster" />
            <p>{movie.title}</p>
            <button onClick={() => setFav(movie)}>❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;