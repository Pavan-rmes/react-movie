import './App.css';
import { Movie } from "./movie.js";
import { useState } from "react";
import { useHistory} from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import { Change } from './Change';
import {initialmovies} from "./InitialMovies" 
import { Addmovie } from './Addmovie';
import { Trailer } from './Trailer';
import { ButtonAppBar } from './ButtonAppBar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {Edit} from './Edit'


function App() {
  const [movies, setMovies] = useState(initialmovies);
  const history = useHistory()
  return (
    <div >
      <ButtonAppBar />
      <br />
      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path ="/">
          <h1>Welcome Marvel Fans</h1>
          <img style={{position:"absolute",width:"99%",height:"95%",objectFit:"cover"}}  src="https://static.parade.com/wp-content/uploads/2020/03/avengers-marvel.jpg" />
        </Route>
        <Route path ="/movies/add">
          <Addmovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path ="/movies/edit/:id">
          <Edit movies={movies} setMovies={setMovies} />
        </Route>
        
        <Route path="/movies/:id">
          <Trailer movies={movies} />
        </Route>
        
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/movies">
          {/* Matcht url display the below component */}
          <Button onClick={()=>history.push("/movies/add")} on style={{float:"right"}} variant="contained" startIcon={<AddIcon />}>ADD</Button>
          <br /><br /><br />
            <section className="movie-App">
            {movies.map((movie, index) => (
              <Movie
                index={index}
                name={movie.movieName}
                rating={movie.movieRating}
                img={movie.movieImg}
                story={movie.movieStory}
                movies={movies}
                setMovies={setMovies}
              />
            ))}
            {/* <Change /> */}
            </section>
        </Route>

        <Route path ="/color">
          <Change />
        </Route>
        
      </Switch>



      
    </div>
  );
}
export default App;
