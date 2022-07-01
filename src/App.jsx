import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Cities from './components/Cities'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import Home from './components/Home'
import { SettingsProvider } from './context/SettingsContext'
import { MenuHidden } from './context/MenuContext'


function App() {
  return (
    <MenuHidden>
    <SettingsProvider>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path='/weatherApp/cities/:city' exact element={<Cities />}/>
          <Route path='/weatherApp' exact element={<Home />}/>
          <Route path='/weatherApp/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </SettingsProvider>
    </MenuHidden>
  )
}

export default App
