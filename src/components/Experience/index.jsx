import { experienceData } from "../../data/ExperienceData";
import {
  Card,
  ExperienceWrapper,
  Highlights,
  Label,
  Meta,
  Role,
  Tags,
} from "./styles";

export const Experience = () => {
  return (
    <ExperienceWrapper>
      <Label>Experience</Label>
      {experienceData.map((job) => (
        <Card key={job.id}>
          <Role>
            {job.role} <span>· {job.company}</span>
          </Role>
          <Meta>{job.meta}</Meta>
          <Highlights>
            {job.highlights.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </Highlights>
          <Tags>
            {job.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </Tags>
        </Card>
      ))}
    </ExperienceWrapper>
  );
};
