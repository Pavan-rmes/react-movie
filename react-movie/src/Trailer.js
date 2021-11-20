import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function Trailer({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  console.log(movies, id, movie);
  return (
    <div>
      <h1>{movie.movieName}</h1>
      <Button onClick={() => history.goBack()} variant="contained">
        <KeyboardBackspaceIcon />
      </Button>
    </div>
  );
}
