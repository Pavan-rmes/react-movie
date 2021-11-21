import { useState } from "react";
import { Counter } from "./counter.js";
import { useHistory , useParams} from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';

export function Movie({ name, rating, img, story ,index,movies,setMovies }) {
  const [show, setshow] = useState("true");
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();
  function deleteMovie(index){
    const updatedMovies = movies.filter((mv,id)=>id !== index)
    setMovies(updatedMovies)
  }
  return (
    <div  className="movie">
      <Card>
        <CardMedia>
          <img onClick={()=>{history.push(`/movies/${index}`)}} className="poster" src={img} alt="#" />
        </CardMedia>
        <CardContent>
          <div  className="movie-name">
            <h4>{name}</h4>
            <h4>⭐ {rating}</h4>
          </div>
          <button
            onClick={(hide) => {
              setshow(!show)
            }}
            style={{ marginBottom: "5px" }}
          >
            {show ? "hide" : "show"} content
          </button>
          <p style={styles} className="movie-story">
            {story}
          </p>
        </CardContent>
        <div className="movie-modify">
          <Counter />
          <div className="editDel">
          <EditIcon onClick={()=>{history.push(`/movies/edit/${index}`)}} />
          <DeleteIcon onClick={()=>{deleteMovie(index)}} color="error"/>
          </div>
        </div>
      </Card>

    </div>
  );
}
