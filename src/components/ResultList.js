import Result from "./Result";
import uuid from "react-uuid";

const ResultList = ( { results, initialRender} ) => {
  return (
    <div>
        <ul>
            {(results.length < 1 && !initialRender.current) ? <h3>No Results Found</h3> : 
            results.map((result) => {
                return <Result key={uuid()} result={result} />
                }
            )}
      </ul>
    </div>
  )
}

export default ResultList