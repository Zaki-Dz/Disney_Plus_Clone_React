import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import LoginContextProvider from './context/LoginContextProvider'
import {AnimatePresence} from 'framer-motion'

const App = () => {
  const location = useLocation()

  return (
    <div className="app">
      <LoginContextProvider>
        <Header />

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Login />} />

            <Route path='/home' element={<Home />} />
          </Routes>
        </AnimatePresence>
      </LoginContextProvider>
    </div>
  )
}

export default App