import { useState } from "react"

const Search = ( { handleClick } ) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const onClick = (e) => {
        e.preventDefault();
        handleClick(text)
    }

    return (
    <div className="search">
        <form onSubmit={onClick}>
            <label htmlFor="fname"><i>Type a name of a historical figure to search</i></label>
            <textarea type="text" id="fname" onChange={handleChange}></textarea>
            <button>Enter</button>
        </form>
        
    </div>
  )
}

export default Search