import spinner from '../../icons/spinner.gif'
import style from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={style.loading}>
      <img src={spinner} alt='Fetching' />
      <h3>Fetching Data</h3>
    </div>
  )
}

export default Loader