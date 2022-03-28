const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};
<div className="search">
  <input placeholder="Search for movies" value="Superman" onChange={() => {}} />
  <div className="container">
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>
      <div>
        <img
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie1.Title}
        />
      </div>
    </div>
  </div>
</div>;
