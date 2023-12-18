import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return(
        <nav className='NavBar'>
        <Link to='/' className='navList'>Home</Link>
        <Link to= 'Projects' className='navList'>Projects</Link>
        <Link to='Contact' className='navList'>Contact</Link>

      </nav>
    )


}

export default Navbar