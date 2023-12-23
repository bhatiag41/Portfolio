import './Workcard.css'
import React from 'react'
import Work from './work'
import Data from './workdata'
const WorkCard = () => {
    const cards =Data.map(item=>{
        return(
            <Work
            {...item}
            />
        )
    })
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {cards}
            </div>
        </div>

    
  )
}

export default WorkCard