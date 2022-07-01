import { useContext } from 'react'
import SelectCity from './SelectCity'
import menuIcon from '../images/menu-icon.svg'
import MenuContext from '../context/MenuContext';


const Header = () => {
  const { hidden, updateHidden } = useContext(MenuContext);
  return (
    <header>
      <img className='menu-icon' src={menuIcon} alt="menu"
        onClick={() => {
          hidden ? updateHidden(false) : updateHidden(true);
        }
        } />
      <h2>City: </h2>
      <SelectCity />
    </header>
  )
}

export default Header
