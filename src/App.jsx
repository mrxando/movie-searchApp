import React, { useEffect, useState } from "react";
import Axios from "axios";
import './App.css'
import MovieComponent from "./MovieComponent";
import MovieInfoComponent from "./MovieInfoComponent";

function App() {

  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  /*
  const onTextChange = (event) =>{
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value)
    const timeout = setTimeout(() => console.log("API CALL"), 500);
    updateTimeoutId(timeout);
  }*/

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=1ff240f9`,
    );
    updateMovieList(response.data.Search);
  };

  useEffect(() => {
                Axios.get(
                  `https://www.omdbapi.com/?s=marvel&apikey=1ff240f9`,
    ).then((response) => updateMovieList(response.data.Search));
  }, []);

  function handleChange(event){
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value)
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
}
  return (
    <div className="Container">
    <div className="Header">
      <div className="AppName">
        <img className="MovieImage" src="/movie-icon.svg" />
        React Movie App
      </div>
      <div className="SearchBox">
          <img className="SearchIcon" src="search-icon.svg" />
          <input className="SearchInput"
          placeholder="Search Movie"
          value={searchQuery}
          onChange={handleChange}
          />
        </div>
    </div>
    {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
    <div className="MovieListContainer">
    {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : "No movie"}
    </div>
    </div>
  )
}

export default App
