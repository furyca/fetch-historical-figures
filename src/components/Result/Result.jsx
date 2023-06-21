import { useState } from "react";
import style from './Result.module.scss'

const Result = ({ result }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <li onClick={handleClick} className={isActive ? style.expanded : ''}>
        {isActive ? 
        <>
          <h2>{result.name} - {result.title}</h2> 
          {result.info.born && <p><strong> Born: </strong>{result.info.born}</p>}
          {result.info.died && <p><strong> Died: </strong>{result.info.died}</p>}
          {result.info.family && <p><strong> Family: </strong>{result.info.family}</p>}
          {result.info.known_for && <p><strong> Known For: </strong>{result.info.known_for}</p>}
          {result.info.nationality && <p><strong> Nationality: </strong>{result.info.nationality}</p>}
        </>
          : <p>{result.name} - <strong>{result.title}</strong> </p>}
    </li>
  );
};

export default Result;
