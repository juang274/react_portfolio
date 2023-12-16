import {Route, Routes} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'


function Routing(){
    return(
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path ='src/Components/Contact.jsx' element={<Contact/>}/>
        </Routes>

      </div>
    )
}

export default Routing