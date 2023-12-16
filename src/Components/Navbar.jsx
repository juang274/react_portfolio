import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return(
        <nav className='NavBar'>
        <Link to='/' className='navList'>Home</Link>
        <Link to='src/Components/Contact.jsx' className='navList'>Contact</Link>
        <Link className='navList'>Projects</Link>
      </nav>
    )


}

export default Navbar