import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const MovieDetails = ({ movie }) => {
  const knownYouTubeEmbedLink = 'https://www.youtube.com/watch?v=bmtuIhesQWA';

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <ReactPlayer
        url={knownYouTubeEmbedLink}
        width="100%"
        height="315px"
        controls
      />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
