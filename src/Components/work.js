import React from 'react'
import { NavLink } from 'react-router-dom'

const work = (props) => {
  return (
    <div>
    <div className='project-card'>
                <img src='https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg' alt='projectimg'/>
                <h2 className='project-title'>{props.ProjectTitle} </h2>
                <div className='pro-details'><p>{props.ProjectText}</p>
               <div className='pro-btns'>
                <NavLink to={props.ViewURL} className='btn'>View</NavLink>
                <NavLink to={props.SourceURL} className='btn'>Source</NavLink></div> 
                </div>
            </div>
    </div>
  )
}

export default work