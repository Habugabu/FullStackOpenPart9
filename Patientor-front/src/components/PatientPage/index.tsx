import { Patient } from "../../types";
import { useParams } from "react-router-dom";
import patientService from "../../services/patients";
import { useEffect, useState } from "react";

const PatientPage = () => {
  const id = useParams().id;
  const [patient, setPatient] = useState<Patient | undefined>(undefined);

  useEffect(() => {
    if (id !== undefined) {
      const fetchPatient = async () => {
        const patient = await patientService.getById(id);
        setPatient(patient);
      };
      void fetchPatient();
    }
  }, [id]);
  if (patient === undefined) {
    return <div></div>;
  }
  return (
    <div>
      <h3>
        {patient.name} ({patient.gender})
      </h3>
      ssn: {patient.ssn}
      <br />
      occupation: {patient.occupation}
    </div>
  );
};

export default PatientPage;
