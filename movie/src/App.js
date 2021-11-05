import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const movies = [
    {
      movieName: "The Avegers",
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      movieRating: 8,
      movieStory:
        "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task."
    },
    {
      movieName: "Avengers: Age of Ultron",
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg",
      movieRating: 7.3,
      movieStory:
        "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him."
    },
    {
      movieName: "Avengers: Infinity War",
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
      movieRating: 8.4,
      movieStory:
        "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."
    },
    {
      movieName: "Avengers: Endgame",
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      movieRating: 8.4,
      movieStory:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance"
    },
    {
      movieName: "Real Steel",
      movieImg:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8dba2a75e5ca5987189cbd281e50d01226d09278eb6b98cc07f728124153ffd5._RI_V_TTW_.jpg",
      movieRating: "7",
      movieStory:
        "Charlie aims to make it big in the sport of robot boxing. When he learns about his son, he reluctantly teams up with him after which, they discover each other while trying to win with an old robot."
    },
    {
      movieName: "Ready Player One",
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg",
      movieRating: "7.4",
      movieStory:
        "James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune."
    }
  ];
  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie
          name={movie.movieName}
          rating={movie.movieRating}
          img={movie.movieImg}
          story={movie.movieStory}
        />
      ))}
    </div>
  );
}
function Movie({ name, rating, img, story }) {
  return (
    <div className="movie">
      <img className="poster" src={img} alt="#" />
      <div className="movie-name">
        <h4>{name}</h4>
        <h4>⭐ {rating}</h4>
      </div>
      <p className="movie-story">{story}</p>
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="like-dislike">
      <button onClick={() => setlike(like + 1)}>👍 {like}</button>
      <button onClick={() => setdislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

export default App;
