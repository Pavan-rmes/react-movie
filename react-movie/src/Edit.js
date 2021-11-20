import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams } from "react-router-dom";

export function Edit({ movies, setMovies }) {
    const { id } = useParams();
    const movie = movies[id]
    console.log(movie)
    const [name, setName] = useState(movie.movieName);
    const [rating, setRating] = useState(movie.movieRating);
    const [movieImg, setMovieImg] = useState(movie.movieImg);
    const [movieStory, setMovieStory] = useState(movie.movieStory);
    const history = useHistory();
    console.log(name)
    function edit() {
        const updatedMovieList = [...movies]
        updatedMovieList[id] ={movieName:name,movieRating:rating,movieImg:movieImg,movieStory:movieStory}
        setMovies(updatedMovieList);
    }
  return (
    <div className="addmovie">
      <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Movie Name" variant="outlined" />
      <br /><br />
      <TextField value={rating} onChange={(event) => setRating(event.target.value)} id="outlined-basic" label="Movie Rating" variant="outlined" />
      <br /><br />
      <TextField value={movieImg} onChange={(event) => setMovieImg(event.target.value)} id="outlined-basic" label="Movie Poster Url" variant="outlined" />
      <br /><br />
      <TextField value={movieStory} onChange={(event) => setMovieStory(event.target.value)} id="outlined-basic" label="Movie summary" variant="outlined" />
      <br /><br />
      <Button style={{backgroundColor:"green"}} onClick={() => {
        edit();
        history.push("/movies");
      }} className="addmovie-button" variant="contained">Save</Button>
    </div>
  );
}
