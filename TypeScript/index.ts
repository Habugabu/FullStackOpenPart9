import express from "express";
import calculateBmi from "./bmiCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;
  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(401).json({ error: "malformatted parameters" });
  } else {
    res.json({
      height: Number(height),
      weight: Number(weight),
      bmi: calculateBmi(Number(height), Number(weight)),
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
