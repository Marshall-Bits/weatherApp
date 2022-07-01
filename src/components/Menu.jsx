import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MenuContext from '../context/MenuContext';
import SettingsContext from '../context/SettingsContext';

const Menu = ()=>{
    const [otherUnit, setOtherUnit] = useState();
    const {settings, updateSetting} = useContext(SettingsContext);
    const { hidden } = useContext(MenuContext);

    useEffect(()=>{
        settings.units === 'metric' ? setOtherUnit('imperial'):setOtherUnit('metric')
    },[settings.units])

    const changeUnits =(()=>{
        settings.units === 'metric' ? updateSetting('units', 'imperial'):updateSetting('units', 'metric')
    });

    if(!hidden){
        return(
            <ul className="menu">
                <Link to="/weatherApp"><li>Home</li></Link>
                <li onClick={changeUnits}>Change units to {otherUnit}</li>
                <li onClick={()=> window.open("https://openweathermap.org/api", "_blank")}>Check the API docs</li>
            </ul>
        )
    } 
    
}

export default Menu;