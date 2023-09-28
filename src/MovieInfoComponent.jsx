import React, { useEffect, useState } from "react";
import Axios from "axios";

const MovieInfoComponent = (props) => {

const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=1ff240f9`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
   
      return (
          <div className="ContainerInfo">
             {movieInfo ? (
        <>
          <img className="CoverImage" src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className="InfoColumn">
            <span className="MovieName">
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </span>
            <span className="MovieInfo">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </span>
            <span className="MovieInfo">
              Year: <span>{movieInfo?.Year}</span>
            </span>
            <span className="MovieInfo">
              Language: <span>{movieInfo?.Language}</span>
            </span>
            <span className="MovieInfo">
              Rated: <span>{movieInfo?.Rated}</span>
            </span>
            <span className="MovieInfo">
              Released: <span>{movieInfo?.Released}</span>
            </span>
            <span className="MovieInfo">
              Runtime: <span>{movieInfo?.Runtime}</span>
            </span>
            <span className="MovieInfo">
              Genre: <span>{movieInfo?.Genre}</span>
            </span>
            <span className="MovieInfo">
              Director: <span>{movieInfo?.Director}</span>
            </span>
            <span className="MovieInfo">
              Actors: <span>{movieInfo?.Actors}</span>
            </span>
            <span className="MovieInfo">
              Plot: <span>{movieInfo?.Plot}</span>
            </span>
          </div>
          <span className="Close" onClick={() => props.onMovieSelect()}>X</span>
        </>
      ) : (
        "Loading..."
      )}
            </div>
        );
    };
    export default MovieInfoComponent;