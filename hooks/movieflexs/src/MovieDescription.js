import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const { description, trailerLink } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe
        title={`${title} Trailer`}
        width="560"
        height="315"
        src={trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default MovieDescription;
