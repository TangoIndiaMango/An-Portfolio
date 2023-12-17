"use client"
import React from 'react'
import Typewriter from "typewriter-effect";

type Props = {}

const TypeWriterText = (props: Props) => {
  return (
    <div className='flex items-center justify-center'>
    <Typewriter options={{
      loop: true,
    }} 
    onInit={(typewriter) => {
      typewriter.typeString("HeY THeRe! I’m an-najaat a ui/ux Designer").pauseFor(4000).deleteChars(16).typeString("a Graphic Designer").pauseFor(4000).start()
    }}
    />
    
    </div>
  )
}

export default TypeWriterText