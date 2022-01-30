import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export function Addmovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieStory, setMovieStory] = useState("");
  const history = useHistory();
  function addnew() {
    setMovies([...movies, { name, rating, poster:movieImg, summary:movieStory }]);
  }
  return (
    <div className="addmovie">
      <TextField onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Movie Name" variant="outlined" />
      <br /><br />
      <TextField onChange={(event) => setRating(event.target.value)} id="outlined-basic" label="Movie Rating" variant="outlined" />
      <br /><br />
      <TextField onChange={(event) => setMovieImg(event.target.value)} id="outlined-basic" label="Movie Poster Url" variant="outlined" />
      <br /><br />
      <TextField onChange={(event) => setMovieStory(event.target.value)} id="outlined-basic" label="Movie summary" variant="outlined" />
      <br /><br />
      <Button onClick={() => {
        addnew();
        history.push("/movies");
      }} className="addmovie-button" variant="contained">Add</Button>
    </div>
  );
}
