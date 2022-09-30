import { useState, useEffect } from "react";
import data from "./fakeMovieService.json";
import "./App.css";

export default function SearchAddDelete() {
  let [searchID, setSearchID] = useState(5);
  let [inputValue, setInputValue] = useState(" ");
  let [includeExclude] = useState([0, 1, 2, 6, 7, 8]);

  function searchMovie(event) {
    event.preventDefault();
    data.map(
      (value, index) => inputValue === value.title && setSearchID(index)
    );
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
        </form>
        <div className="resultBox">
          <h3>TITLE: {data[searchID].title}</h3>
          <h3>GENRE: {data[searchID].genre.name}</h3>
          <h3>RATE: {data[searchID].rate}</h3>
        </div>
        <br />
        <button
          onClick={() =>
            includeExclude.indexOf(data[searchID]) === -1 &&
            includeExclude.push(data[searchID])
          }
        >
          ADD
        </button>
      </div>
      <div className="listBox">
        <h1>MY ORDER</h1>
        <h4> TITLE | GENRE | RATE </h4>
        {useEffect(() => {
          data.map((listItem, index) => {
            if (includeExclude.indexOf(index) !== -1)
              return (
                <span className="list">
                  <h4 className="movie-list" id={index}>
                    {listItem.title} | {listItem.genre.name} | {listItem.rate}
                  </h4>
                  <button
                    className="btn-delete"
                    onClick={(index) =>
                      includeExclude.indexOf(index) !== -1 &&
                      includeExclude.delete(includeExclude.indexOf(index))
                    }
                  >
                    DELETE
                  </button>
                </span>
              );
          });
        }, [searchID])}
      </div>
    </main>
  );
}
