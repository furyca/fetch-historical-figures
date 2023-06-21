import { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import ResultList from "../ResultList/ResultList.jsx";
import Search from "../Search/Search";
import style from './App.module.scss'

function App() {
  const [name, setName] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setLoading] = useState(false)

  const initialRender = useRef(true);

  useEffect (() => 
  {
    if (initialRender.current) {
      initialRender.current = false;
    }
    else {
      const fetchFigures = async () => {
        setLoading(true)
        const res = await fetch('https://api.api-ninjas.com/v1/historicalfigures?name=' + name, 
        {headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY}})
        const data = await res.json()
        setLoading(false)
  
        return data
        
      }
  
      fetchFigures().then(data => setResults(data))
    }
    
  }, [name])

  const handleClick = (text) => {
    //To handle empty query related errors
    let trimmedText = text.trim()
    if (trimmedText.length < 1) {
      return
    }

    //To handle quotation mark related errors
    else if (text.includes('"')) { 
      const textArray = text.split('')

      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === '"') {
          textArray[i] = "'"
        }
      }

      const newText = textArray.join('')

      console.log(newText);

      setName(newText)
    }
    else {
      setName(text)
    }
  }

  return (
    <>
      <Header />
      <div className={style.container}>
        <Search handleClick={handleClick}/>
        {isLoading ? <Loader /> : <ResultList results={results} initialRender={initialRender} />}
      </div>
      
    </>
  );
}

export default App;
