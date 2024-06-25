import './SkillStyles.css';
import Skill from './Skill';
import GitHubIcon from '../assets/footer-icons/github.png';
import NodeIcon from '../assets/skills-icons/nodeicon.png';
import ReactIcon from '../assets/skills-icons/reacticon.png';
import ExpressIcon from '../assets/skills-icons/expressicon.png';
import HTMLIcon from '../assets/skills-icons/htmlicon.png';
import CSSIcon from '../assets/skills-icons/cssicon.png';
import JSIcon from '../assets/skills-icons/jsicon.png';
import PythonIcon from '../assets/skills-icons/pythonicon.png';
import MongoDBIcon from '../assets/skills-icons/mogodbicon.png';
import JavaIcon from '../assets/skills-icons/javaicon.png';
import SQLIcon from '../assets/skills-icons/sqlicon.png';
import GitIcon from '../assets/skills-icons/giticon.png';



const Skillset = () => {
  return (
    <div className='skillset-container'>
      <div className='skill-heading'>
        <h1>Skills</h1>
      </div>
      <h2>MERN Stack</h2>
      <div className="skillset">
        <Skill skillImg={HTMLIcon} skillName="HTML" />
        <Skill skillImg={CSSIcon} skillName="CSS" />
        <Skill skillImg={JSIcon} skillName="Javascript" />
        <Skill skillImg={MongoDBIcon} skillName="Mongodb" />
        <Skill skillImg={NodeIcon} skillName="Node.js" />
        <Skill skillImg={ExpressIcon} skillName="Express.js" />
        <Skill skillImg={ReactIcon} skillName="React.js" />
      </div>
      <h2>Programming Languages</h2>
      <div className='skillset'>
      <Skill skillImg={PythonIcon} skillName="Python" />
      <Skill skillImg={JavaIcon} skillName="Java" />
      </div>
      <h2>Others</h2>
      <div className='skillset'>
      <Skill skillImg={GitIcon} skillName="Git" />
      <Skill skillImg={GitHubIcon} skillName="Github" />

      <Skill skillImg={SQLIcon} skillName="SQL" />



      </div>
    </div>
  );
};

export default Skillset;
