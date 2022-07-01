import { createContext, useState } from 'react'

const MenuContext = createContext()

export const MenuHidden = ({children}) => {
    const [hidden, setHidden] = useState(true);

    const updateHidden = (value) => {
        setHidden(value);
    }

    return <MenuContext.Provider value={{hidden, updateHidden}}>{children}</MenuContext.Provider>
}

export default MenuContext;