import {motion} from 'framer-motion'
import './Projects.css'

const Projects = () =>{
    return(
        <motion.div className='project'
        initial = {{opacity: 0, transition:{duration:1}}}
        animate = {{opacity: 1, transition:{duration:1}}}
        exit = {{opacity: 0, transition:{duration:1}}}
        >
            <div className='divBox'>
                <h1 className='title'>My Portfolio</h1>
                <img src="src/images/Portfolio.PNG" alt="" height= '50%' width='50%'/>
                <div className='boxSize'>
                    <p>This is my personal portfolio containing my projects and my contacts. 
                        The portfolio uses React.js as the JavaScript library. 
                        It utilizes various React functions such as Router which allows it to access to different pages. 
                        It also contains framer-motion to animate things like buttons. </p>
                        <div>
                            <a className ='aButton' href="https://github.com/juang274/react_portfolio"> Code</a>
                            <a className ='aButton' href="https://hoangportfolio.surge.sh/">App</a>
                        </div>
                </div>                
            </div>

            <div className='divBox'>
                <h1 className='title'>NBA Team App</h1>
                <img src="src/images/NBATeamappimg.PNG" alt="" height= '50%' width='50%'/>
                <div className='boxSize'>
                    <p>This web app is an NBA app which shows all 30 NBA teams. 
                        Each team when hovered will show their best or their franchise player from that team. 
                        The web apps uses React.js as a JavaScript library. 
                        The web app utilizes mapping to grab data from the json file.</p>
                        <div>
                            <a className ='aButton' href="https://github.com/juang274/u3_project/tree/main/u3project"> Code</a>
                            <a className ='aButton' href="https://hnguyenweb.surge.sh/">App</a>
                        </div>
                </div>                
            </div>

            <div className='divBox'>
                <h1 className='title'>Web Search Engine</h1>
                <img src="src/images/websearchimage.PNG" alt="" height='50%' width='50%'/>
                <div className='boxSize'>
                    <p>This is a web search engine utilizing only Html and Css. 
                        One of my early projects to show what I could do without JavaScript or any other libraries. 
                        It acts very similar to a real search engine but without a server and data.</p>
                        <div>
                            <a className ='aButton' href="https://github.com/juang274/project-1"> Code</a>
                        </div>
                </div>            
            </div>


        </motion.div>
    )
}

export default Projects