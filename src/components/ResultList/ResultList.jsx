import Result from "../Result/Result";
import uuid from "react-uuid";

const ResultList = ({ results, initialRender }) => {
  return (
    <>
      <ul>
        {results.length < 1 && !initialRender.current ? (
          <h3>No Results Found</h3>
        ) : (
          results.map((result) => {
            return <Result key={uuid()} result={result} />;
          })
        )}
      </ul>
    </>
  );
};

export default ResultList;
