const calculateExercises = (
  hours: number[],
  target: number
): exerciseResult => {
  const periodLength = hours.length;
  const average =
    hours.reduce((partialSum, a) => partialSum + a, 0) / periodLength;
  var rating = 1;
  if (average >= target) {
    rating = 3;
  } else if (average >= target / 2) {
    rating = 2;
  }
  var ratingDescription = "Try harder!";
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

interface exerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
