import { useContext } from 'react'
import SettingsContext from '../context/SettingsContext';
import { useNavigate } from 'react-router-dom';


const SelectCity = () => {
    const { settings, updateSetting } = useContext(SettingsContext);
    const navigate = useNavigate();

    return (
        <select defaultValue={"Select your city"} onChange={(e) => {
            updateSetting('selectedCity', e.target.value);
            navigate(`/cities/${(e.target.value).toLowerCase()}`)
        }} name="select-city" >
            <option disabled="disabled">Select your city</option>   
            {settings.cities.map((city) => {
                return <option key={city}>{city}</option>
            })}
        </select>
    )
};

export default SelectCity;