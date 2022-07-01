import City from './City'
import { useLocation } from 'react-router-dom'

const Cities = () => {
  const location = useLocation();
  const cityName = location.pathname.slice(19);
  return (
    <div className='city'>
      <City name={cityName} />
    </div>
  )
}

export default Cities
