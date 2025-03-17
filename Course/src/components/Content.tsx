const Content = ({
  courseParts,
}: {
  courseParts: { name: string; exerciseCount: number }[];
}) => {
  return (
    <div>
      {courseParts.map((course) => (
        <Course
          name={course.name}
          exerciseCount={course.exerciseCount}
          key={course.name}
        />
      ))}
    </div>
  );
};

const Course = ({
  name,
  exerciseCount,
}: {
  name: string;
  exerciseCount: number;
}) => {
  return (
    <div>
      <p>
        {name} {exerciseCount}
      </p>
    </div>
  );
};

export default Content;
