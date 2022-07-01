import { useContext, useEffect, useState } from 'react'
import SettingsContext from '../context/SettingsContext'
import { Link } from "react-router-dom";

const City = ({ name }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState();
  const [errorSearching, setErrorSearching] = useState(false);
  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('weather'));

    if (local?.city.name.toLowerCase() === name.toLowerCase()) {
      setData(local);
    }
    else {
      const fetchData = async () => {

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast/?q=${name}&appid=${apiKey}&units=${settings.units}`
        )
        if (!response.ok) {
          setErrorSearching(true);
          throw Error('City not found');
        }
        const data = await response.json();
        localStorage.setItem('weather', JSON.stringify(data));
        setData(data);
      }
      fetchData()
    }
  }, [name, settings.units])

  const weatherBackgorund = ((icon) => {
    let color;
    switch (icon) {
      case '01d':
      case '01n':
        color = 'rgb(0, 183, 255)'
        break;

      case '02d':
      case '02n':
        color = 'rgb(26, 155, 206)'
        break;

      case '03d':
      case '03n':
        color = 'rgb(115, 141, 151)'
        break;

      case '04d':
      case '04n':
        color = 'rgb(45, 60, 66)'
        break;

      default:
        color = 'rgb(0, 183, 255)'
        break;
    }
    return color;
  })

  return (
    <>
      {data ? (
        <>
          <h1>{name.charAt(0).toUpperCase() + name.slice(1)}:</h1>
          {data.list.slice(0, 5).map((city) => {
            let time = city.dt_txt.split(' ')[1].split(':')
            return (
              <div className='card' key={Math.random() * 9999999}
                style={{
                  background: weatherBackgorund(city.weather[0].icon)
                }
                }>
                <img className='rise' src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt='Weather icon' />
                <h3>{`${time[0]}:${time[1]}`}</h3>
                <p className='main'>Temperature: {Math.round(city.main.temp)}º</p>
                <p className='main'>Humidity: {city.main.humidity}%</p>
              </div>
            )
          })}
        </>
      )
        :
        (
          !errorSearching ? (
            <h2> Loading...</h2>
          ) : (
            <>
              <h2>Sorry, we didn't find your city.</h2>
              <Link to="/"><button className='btn'>Go back</button></Link>
            </>
          )

        )
      }
    </>
  )
}

export default City
