import PropTypes from 'prop-types';
import './SkillStyles.css';

const Skill = ({ skillImg, skillName }) => {
  return (
    <div className="skill-container">
      <img src={skillImg} alt={skillName} />
      <p>{skillName}</p>
    </div>
  );
};

Skill.propTypes = {
  skillImg: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default Skill;

