import { CoursePart } from "../types";

const Part = ({ part }: { part: CoursePart }) => {
  const partTitle = (
    <b>
      {part.name} {part.exerciseCount}
    </b>
  );
  switch (part.kind) {
    case "basic":
      return (
        <div>
          {partTitle}
          <br />
          <i>{part.description}</i>
        </div>
      );
    case "group":
      return (
        <div>
          {partTitle}
          <br />
          project exercises {part.groupProjectCount}
        </div>
      );
    case "background":
      return (
        <div>
          {partTitle}
          <br />
          <i>{part.description}</i>
          <br />
          {part.backgroundMaterial}
        </div>
      );
    case "special":
      return (
        <div>
          {partTitle}
          <br />
          <i>{part.description}</i>
          <br />
          required skills: {part.requirements.join(", ")}
        </div>
      );
  }
};

export default Part;
