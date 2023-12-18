import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '', trailerLink: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation can be added here

    // Add the new movie to the list
    onAddMovie(newMovie);

    // Reset the form
    setNewMovie({ title: '', description: '', posterURL: '', rating: '', trailerLink: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={newMovie.description} onChange={handleChange} />
      </label>
      <label>
        Poster URL:
        <input type="text" name="posterURL" value={newMovie.posterURL} onChange={handleChange} />
      </label>
      <label>
        Rating:
        <input type="text" name="rating" value={newMovie.rating} onChange={handleChange} />
      </label>
      <label>
        Trailer Link:
        <input type="text" name="trailerLink" value={newMovie.trailerLink} onChange={handleChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
