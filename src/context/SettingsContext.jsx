import { createContext, useState } from 'react'

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    cities: ['Barcelona', 'Roma', 'Preixana', 'London', 'Rome', 'New York', 'Yakutsk', 'Cupertino', 'Oslo', 'Paris', 'Tokio', 'Vic', 'Budapest'],
    selectedCity: '',
    units: 'metric',
  })

  const updateSetting = (property, value) => {
    setSettings({ ...settings, [property]: value })
  }

  return <SettingsContext.Provider value={{ settings, updateSetting }}>{children}</SettingsContext.Provider>
}

export default SettingsContext
