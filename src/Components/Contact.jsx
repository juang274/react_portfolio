import './Contact.css'
import {motion} from 'framer-motion'

const Contact = () =>{
    return(
        <motion.div className='contacts'
        initial = {{opacity: 0, transition:{duration:1}}}
        animate = {{opacity: 1, transition:{duration:1}}}
        exit = {{opacity: 0, transition:{duration:1}}}
        >
            <h1 className='contactsTitle'>Contacts</h1>
        <a id ='linkedin' href='https://www.linkedin.com/in/hoang-nguyen-3b9751211/'>
            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png' height='100' width='100'  rel="noreferrer noopener" target='_blank'></img>
        </a>
        <a href='https://github.com/juang274'>
            <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' height={100} width={100} rel="noreferrer noopener" target='_blank'></img>
        </a>
        <p>Email: hoangnguyen4459@gmail.com <br /> <br /> Phone: (510)610-2349</p>
        
        </motion.div>


    )
}

export default Contact