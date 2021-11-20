import './App.css';
import { Movie } from "./movie.js";
import { useState , useHistory } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Change } from './Change';
import {initialmovies} from "./InitialMovies" 
import { Addmovie } from './Addmovie';
import { Trailer } from './Trailer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function App() {
  const [movies, setMovies] = useState(initialmovies);
  return (
    <div >
      <ButtonAppBar />
      <ul>
        <li>
          <Link to="/movies/add">Add-movie</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color">Color-game</Link>
        </li>
      </ul>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route path ="/movies/add">
          <Addmovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path ="/movies/edit/:id">
          <Edit />
        </Route>
        
        <Route path="/movies/:id">
          <Trailer movies={movies} />
        </Route>
        
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/movies">
          {/* Matcht url display the below component */}
           
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



function Edit(){
  return(
    <div>Hello</div>
  )
}


function ButtonAppBar() {
  const[click,setclick] = useState(false)
  // const history = useHistory();

  let styleMenu 
  let styleClose
  let stylesHome
  let styles

  function menuClick(){
    setclick(!click)
  }
  if (click === true){
    styleMenu ={display:"none"}
    styleClose = {display:"block"}
    stylesHome ={display:"none"}
    styles = {display:"flex"} 
  }

  function closeClick(){
    setclick(!click)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <div className ="menu-close" style ={styleClose} >
        <CloseIcon onClick ={()=>closeClick()} />
      </div>
        <Toolbar>
          <div className="appdrawer">
            <IconButton
              onClick={()=>menuClick()}
              style={styleMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton >
          </div>
          <div className="appbar-hidden" style={stylesHome} >
            <Button color="inherit" >
              <Typography variant="h6" >
                Home
              </Typography>
            </Button>
          </div>
          <div style={styles} className="appbar" >
            <Button color="inherit" >
              <Typography variant="h6" >
                Home
              </Typography>
            </Button>
            <Button color="inherit" >
              <Typography variant="h6" >
                MOVIES
              </Typography>
            </Button>
            <Button color="inherit" >
              <Typography variant="h6" >
                COLOR GAME
              </Typography>
            </Button>
            <Button className= "login" color="inherit" >
              <Typography variant="h6" >
                Login
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{paddingLeft:"4%"}}>
        
      </div>
    </Box>
  );
}