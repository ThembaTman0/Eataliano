import Veggie from "../components/Veggie"
import Popular from "../components/Popular"
import Landing from "./Landing";
// import Footer from "./Footer";

import Pescetarian from "../components/Pescetarian"
import {motion} from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
        <Landing/>
        
        <Popular />

        <Pescetarian />
        <Veggie />
        {/* <Footer /> */}
    </motion.div>
  )
}

export default Home