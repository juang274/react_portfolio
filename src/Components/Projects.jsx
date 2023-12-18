import {motion} from 'framer-motion'
import './Projects.css'

const Projects = () =>{
    return(
        <motion.div className='project'
        initial = {{opacity: 0, transition:{duration:1}}}
        animate = {{opacity: 1, transition:{duration:1}}}
        exit = {{opacity: 0, transition:{duration:1}}}
        >
            <h1>OMG</h1>
        </motion.div>
    )
}

export default Projects