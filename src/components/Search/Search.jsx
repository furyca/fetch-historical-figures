import { useState } from "react";
import style from "./Search.module.scss";

const Search = ({ handleClick }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    handleClick(text);
  };

  return (
    <div className={style.search}>
      <form onSubmit={onClick}>
        <label htmlFor="fname">
          <i>Type a name of a historical figure to search</i>
        </label>
        <input type="text" id="fname" onChange={handleChange}></input>
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Search;
