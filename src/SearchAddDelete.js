import { useState } from "react";
import movie_list from "./fakeMovieService.json";
import "./App.css";

export default function SearchAddDelete() {
  let [inputValue, setInputValue] = useState(" ");
  let [includeExclude] = useState([
    "5b21ca3eeb7f6fbccd471821",
    "5b21ca3eeb7f6fbccd47181f",
    "5b21ca3eeb7f6fbccd471816",
  ]);
  let [movie, setMovie] = useState([]);

  function searchMovie(event) {
    event.preventDefault();
    movie_list.map((listItem) => {
      console.log(listItem.title.includes(inputValue));
      listItem.title.includes(inputValue) && setMovie(listItem);
    });
  }

  return (
    <main>
      <div className="searchBox">
        <form>
          <input
            type="text"
            onChange={(event) => setInputValue(event.target.value.trim())}
          />
          <button onClick={searchMovie}>SEARCH</button>
          <div className="resultBox">
            <h3>TITLE: {movie.title}</h3>
            <h3>RATING: {movie.rate}</h3>
          </div>
          <br />
          <button onClick={includeExclude.push(movie._id)}>ADD</button>
        </form>
      </div>
      <div className="listBox">
        <h1>MY ORDER</h1>
        <h4> TITLE | GENRE | RATE </h4>
        {movie_list.map((listItem, index) => {
          if (includeExclude.includes(listItem._id))
            return (
              <span className="list">
                <h4 className="movie-list" id={index}>
                  {listItem.title} | {listItem.genre.name} | {listItem.rate}
                </h4>
                <button
                  className="btn-delete"
                  onClick={includeExclude.find(
                    (element) =>
                      element === listItem._id && delete includeExclude[element.indexOf]
                  )}
                >
                  DELETE
                </button>
              </span>
            );
        })}
      </div>
    </main>
  );
}
