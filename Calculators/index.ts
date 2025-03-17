import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;
  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).json({ error: "malformatted parameters" });
  } else {
    res.status(200).json({
      height: Number(height),
      weight: Number(weight),
      bmi: calculateBmi(Number(height), Number(weight)),
    });
  }
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.status(400).json({ error: "parameters missing" });
  } else if (
    !Array.isArray(daily_exercises) ||
    daily_exercises.some((entry) => isNaN(Number(entry))) ||
    isNaN(Number(target))
  ) {
    res.status(400).json({ error: "malformatted parameters" });
  } else {
    res
      .status(200)
      .json(calculateExercises(daily_exercises as number[], Number(target)));
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
