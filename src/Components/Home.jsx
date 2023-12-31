import './Home.css'
import {motion} from 'framer-motion'

const Home = () =>{
    return(
        <motion.div 
        className='bio'
        initial = {{opacity: 0, transition:{duration:1}}}
        animate = {{opacity: 1, transition:{duration:1}}}
        exit = {{opacity: 0, transition:{duration:1}}}
        >

        <h1>My Name is Hoang Nguyen</h1>
        <h2>I am a Front-End Developer specializing in React.js</h2>
        </motion.div>
    )
}

export default Home