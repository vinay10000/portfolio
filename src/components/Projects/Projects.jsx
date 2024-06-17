import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectCard  src={viberr} h3="Viberr" p="A music streaming platform"/>
            <ProjectCard  src={freshBurger} h3="Fresh Burger" p="HamBurger Restaurant"/>
            <ProjectCard  src={hipsster} h3="Hipsster" p="Glasses Store"/>
            <ProjectCard  src={fitlift} h3="FitLift" p="Fitness App"/>
        </div>
    </section>
  )
}

export default Projects