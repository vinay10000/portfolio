import styles from './Skills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
const Skills = () => {
  return (
    <section id='skills' className={styles.container} >
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML"/>
           <SkillList src={checkMarkIcon} skill="CSS"/>
           <SkillList src={checkMarkIcon} skill="Javascript"/>
           <SkillList src={checkMarkIcon} skill="React"/>
           <SkillList src={checkMarkIcon} skill="Node"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="Angular"/>
           <SkillList src={checkMarkIcon} skill="Vue"/>
           <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
           <SkillList src={checkMarkIcon} skill="C"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="Redux"/>
           <SkillList src={checkMarkIcon} skill="Git"/>
           <SkillList src={checkMarkIcon} skill="Bootstrap"/>
           <SkillList src={checkMarkIcon} skill="Express"/>
           <SkillList src={checkMarkIcon} skill="MongoDB"/>
        </div>
        <hr />
    </section >
  )
}

export default Skills