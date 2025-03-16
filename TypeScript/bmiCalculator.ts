const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / ((height * height) / 10000);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 25.0) {
    return "Overweight";
  } else {
    return "Normal range";
  }
};

console.log(calculateBmi(180, 74));
