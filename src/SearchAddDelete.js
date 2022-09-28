import { useState } from "react";
import data from "./fakeMovieService.json";
import "./App.css";

export default function SearchAddDelete() {
  let [searchResult, setSearchResult] = useState({
    title: " ",
    genre: " ",
    rate: 0,
  });

  return (
    <main>
      <div className="searchBox">
        <form>
          <input type="text" />
          <button>SEARCH</button>
        </form>
        <div className="resultBox">
          <h3>TITLE: {searchResult.title}</h3>
          <h3>GENRE: {searchResult.genre}</h3>
          <h3>RATE: {searchResult.rate}</h3>
        </div>
      </div>
      <div className="listBox">
        <h3>MY ORDER</h3>
        <h4> TITLE | GENRE | RATE </h4>
        {data.map((listItem, index) => {
          return (
            <h4 id={index}>
              {listItem.title} | {listItem.genre.name} | {listItem.rate}
            </h4>
          );
        })}
      </div>
    </main>
  );
}
