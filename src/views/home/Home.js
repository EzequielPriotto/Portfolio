import ReactTypingEffect from 'react-typing-effect';
import { motion } from "framer-motion";

import './Home.css';

export default function Home() {
    return (
        <main className='App-content'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <h1>Hi Im <span> <ReactTypingEffect text={[" Ezequiel!", " Developer!", " Editor!"]} /> </span></h1>
            </motion.div>
            <section>
                <motion.div initial={{ y: '12vh', opacity:0 }} whileInView={{ y: 0, opacity: 1 }}>
                    <img src='./assets/img/SoftwareDeveloper.svg' ></img>
                </motion.div>
            </section>


        </main>

    )
}