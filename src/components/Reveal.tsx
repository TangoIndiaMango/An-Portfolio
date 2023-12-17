import { motion, useInView, useAnimate, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode;
}


const Reveal = ({ children}: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); //once to true so if you scroll up and down it dosent keep going

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            //fire animation

            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0, }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>

        </div>
    )
}

export default Reveal