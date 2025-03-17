import { NewPatient, Gender } from "./types";

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  if (
    "name" in object &&
    "ssn" in object &&
    "gender" in object &&
    "dateOfBirth" in object &&
    "occupation" in object
  ) {
    const newPatient: NewPatient = {
      name: parseStringParameter(object.name),
      ssn: parseStringParameter(object.ssn),
      gender: parseGender(object.gender),
      dateOfBirth: parseDate(object.dateOfBirth),
      occupation: parseStringParameter(object.occupation),
    };
    return newPatient;
  }

  throw new Error("Incorrect data: some fields are missing");
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  } else {
    return gender;
  }
};

const parseStringParameter = (param: unknown): string => {
  if (!isString(param) || param === "") {
    throw new Error("Incorrect or missing parameter: " + param);
  } else {
    return param;
  }
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

export default toNewPatient;
