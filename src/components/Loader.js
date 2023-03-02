import spinner from './icons/spinner.gif'

const Loader = () => {
  return (
    <div className='loading'>
        <img src={spinner} alt='Fetching' />
        <h3>Fetching Data</h3>
    </div>
  )
}

export default Loader