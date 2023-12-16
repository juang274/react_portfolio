import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Routing from './Components/Routing'

const App = () => {

  return (
    <Router>
    <div>
      <Navbar/>
      <Routing/>
    </div>      
    </Router>

  )
}

export default App