import {Route, Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Contact from './Contact'
import Home from './Home'
import Projects  from './Projects'


const Routing = () => {
  const location = useLocation()
    return(
      
      <div>
        <AnimatePresence/>
        <Routes location ={location} key = {location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path ='Contact' element={<Contact/>}/>
          <Route path ='Projects' element={<Projects/>}/>
        </Routes>
        <AnimatePresence/>
      </div>
    )
}

export default Routing