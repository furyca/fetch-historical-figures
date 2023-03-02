import { useState } from "react"
import Details from "./Details"

const Result = ( { result } ) => {
    const [isActive, setIsActive] = useState(false)

    const isExpanded = isActive ? "collapse-button" : "expand-button"
    const showDetails = isActive ? "expanded" : "collapsed"

    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <li>
            <Details showDetails={showDetails}  isExpanded={isExpanded} handleClick={handleClick} isActive={isActive} result={result} />
        </li>
    )
}

export default Result