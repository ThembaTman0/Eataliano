import Veggie from "../components/Veggie"
import Popular from "../components/Popular"
import Pescetarian from "../components/Pescetarian"
import {motion} from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
        <Veggie />
        <Popular />
        <Pescetarian />
    </motion.div>
  )
}

export default Home