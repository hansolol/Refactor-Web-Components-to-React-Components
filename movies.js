function Movie({ data }) {
  const movieStyle = {
    background: `url(${data.imageUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="movie-card">
      <MovieHeader movieStyle={movieStyle} />
      <MovieContent data={data} />
    </div>
  );
}

//The Movie component is divided into smaller components like MovieHeader, MovieContent, MovieInfo, and InfoSection. Each component focuses on a specific part of the movie card.

//The Movie component passes the necessary props down to its child components to make the code more organized and easier to understand.

//The use of template literals is used for generating the movieStyle object.

function MovieHeader({ movieStyle }) {
  return (
    <div className="movie-header" style={movieStyle}>
      <div className="header-icon-container">
        <a href="#">
          <i className="material-icons header-icon"></i>
        </a>
      </div>
    </div>
  );
}

function MovieContent({ data }) {
  return (
    <div className="movie-content">
      <div className="movie-content-header">
        <a href="#">
          <h3 className="movie-title">{data.title}</h3>
        </a>
        <div className="imax-logo"></div>
      </div>
      <MovieInfo data={data} />
    </div>
  );
}

function MovieInfo({ data }) {
  return (
    <div className="movie-info">
      <InfoSection label="Date & Time" value={data.showTime} />
      <InfoSection label="Screen" value={data.screen} />
      <InfoSection label="Row" value={data.row} />
      <InfoSection label="Seat" value={data.seat} />
    </div>
  );
}

function InfoSection({ label, value }) {
  return (
    <div className="info-section">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
}
