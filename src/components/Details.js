const Details = ( { showDetails, isExpanded, handleClick, isActive, result } ) => {
  return (
    <div className='flex'>
        <button className={isExpanded} onClick={handleClick} />
        <div className={showDetails}>
            {isActive ? <h2>{result.name} - {result.title}</h2> : <p>{result.name} - {result.title}</p>}
            {isActive && <p><strong> Born: </strong>{result.info.born}</p>}
            {isActive && <p><strong> Died: </strong>{result.info.died}</p>}
        </div>
    </div>
  )
}

export default Details