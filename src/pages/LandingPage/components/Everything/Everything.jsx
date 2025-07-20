import { motion } from "motion/react";
import "./Everything.css";
import EverythingCard from "./EverythingCard";
import { EverythingData } from "./EverythingData";


export default function Everything(){

      const slideUpVariants = {
  
    };

    return <div className="everything-container">
        <h2>Everything You Need for Mental Wellness</h2>
        <div>
            {EverythingData.map(item => {
                return <motion.div
                        variants={{
                            hidden: { y: 100, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration: item.id, ease: "easeOut", delay:0.2 },
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        style={{display:'flex'}}
                        key={item.id}
                        viewport={{ once: true }} 
                        >
                            <EverythingCard  {...item} />
                      </motion.div>
            })}
        </div>
    </div>
}