const calculateExercises = (
  hours: number[],
  target: number
): ExerciseResult => {
  const periodLength = hours.length;
  const average =
    hours.reduce((partialSum, a) => partialSum + a, 0) / periodLength;
  let rating = 1;
  if (average >= target) {
    rating = 3;
  } else if (average >= target / 2) {
    rating = 2;
  }
  let ratingDescription = "Try harder!";
  if (rating == 2) {
    ratingDescription = "Not too bad!";
  } else if (rating == 3) {
    ratingDescription = "Great job, you reached the target!";
  }
  return {
    periodLength,
    trainingDays: hours.filter((n) => n > 0).length,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
};

interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface ExerciseTarget {
  hours: number[];
  target: number;
}
const parseExerciseArguments = (args: string[]): ExerciseTarget => {
  if (args.length < 4) throw new Error("Not enough arguments");
  const hours = args.slice(3).map((s) => Number(s));

  if (!isNaN(Number(args[2])) && hours.every((n) => !isNaN(n))) {
    return {
      target: Number(args[2]),
      hours,
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

try {
  const { target, hours } = parseExerciseArguments(process.argv);
  console.log(calculateExercises(hours, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
