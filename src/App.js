import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ResultList from "./components/ResultList";
import Search from "./components/Search";

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
      return setName ('4894561984')
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

      setName(newText)
    }
    else {
      setName(text)
    }
  }

  return (
    <div>
      <Header />
      <Search handleClick={handleClick}/>
      {isLoading ? <Loader /> : <ResultList results={results} initialRender={initialRender} />}
    </div>
  );
}

export default App;
