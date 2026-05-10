import './App.css'
import { motion } from 'motion/react';

function App() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }} //starting state
        animate={{ opacity: 1, y: 0 }} //ending state
        transition={{ duration: 1, ease: 'easeIn' }} //duration of the animation in seconds
      >
        <motion.h1>
          Hello world
        </motion.h1>
      </motion.div>

    </>
  )
}

export default App
