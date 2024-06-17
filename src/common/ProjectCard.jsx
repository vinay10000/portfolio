import React from 'react'

const ProjectCard = ({src,h3,p}) => {
  return (
    <a href="" target='_blank'>
        <img src={src} className="hover" alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCard