
const MovieComponent = (props) => {

  const { Title, Year, imdbID, Type, Poster } = props.movie;
    return (
        <div className='MovieContainer' onClick={() => {
          props.onMovieSelect(imdbID);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
            <img className='CoverImagee' src={Poster} alt={Title} />
      <span className='MovieNamee'>{Title}</span>
      <div className='InfoColumnn'>
        <span className='MovieInfoo'>Year : {Year}</span>
        <span className='MovieInfoo'>Type : {Type}</span>
      </div>
            </div>
      );
  };
  export default MovieComponent;