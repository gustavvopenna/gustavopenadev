import React from 'react'
import { motion } from 'framer-motion'

const Switch = ({ isOn, ...otherProps }) => {
  const className = `switch ${isOn ? 'on' : 'off'}`

  const BASE_WIDTH = 60
  const BASE_PADDING = 5

  return (
    <>
      <motion.div layout className={className} {...otherProps}>
        <motion.div layout />
      </motion.div>

      <style jsx global>{`
        .switch {
          width: ${BASE_WIDTH}px;
          height: ${(BASE_WIDTH - BASE_PADDING) / 2 + (BASE_PADDING * 2)}px;
          border-radius: 100px;
          padding: ${BASE_PADDING}px;
          display: flex;
          cursor: pointer;
        }
        
        .switch.on {
          background-color: #22cc88;
          justify-content: flex-end;
        }
        
        .switch.off {
          background-color: #dddddd;
          justify-content: flex-start;
        }
        
        .switch div {
          width: ${(BASE_WIDTH - BASE_PADDING) / 2}px;
          height: ${(BASE_WIDTH - BASE_PADDING) / 2}px;
          background-color: #ffffff;
          border-radius: 200px;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
        }
      `}</style>
    </>
  )
}

export default Switch