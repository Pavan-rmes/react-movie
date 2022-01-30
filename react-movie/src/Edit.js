import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams } from "react-router-dom";
import {axios} from "axios"
import { API } from "./utility";
import { Movie } from "./movie";

export function Edit({ movies, setMovies }) {
    const { id } = useParams();
    const movie = movies.filter(mv=>(mv._id === id))[0];
    console.log(movie.name)
    const [name, setName] = useState(movie.name);
    const [rating, setRating] = useState(movie.rating);
    const [movieImg, setMovieImg] = useState(movie.poster);
    const [movieStory, setMovieStory] = useState(movie.summary);
    console.log(name,rating,movieImg,movieStory)
    const history = useHistory();
    function edit() {
      const editedMovie = {name,rating,poster:movieImg,summary:movieStory}
      fetch(`${API}/movies/${id}`,{
        method:"PUT",
        body:editedMovie
      })
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
