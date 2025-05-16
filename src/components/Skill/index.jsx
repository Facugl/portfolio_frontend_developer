import { Skill } from "./styled";

export const SkillItem = (skill) => {
  return (
    <Skill color={skill.color}>
      <img src={skill.url} alt={skill.name + " Icon"} />
      <span>{skill.name}</span>
    </Skill>
  );
};
