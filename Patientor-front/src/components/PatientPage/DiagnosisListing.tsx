import { Diagnosis } from "../../types";
import diagnosisService from "../../services/diagnoses";
import { useEffect, useState } from "react";

interface Props {
  code: string;
}

const DiagnosisListing = ({ code }: Props) => {
  const [diagnosis, setDiagnosis] = useState<Diagnosis | undefined>(undefined);
  useEffect(() => {
    const fetchDiagnosis = async () => {
      const diagnosis = await diagnosisService.getByCode(code);
      setDiagnosis(diagnosis);
    };
    void fetchDiagnosis();
  }, [code]);
  if (diagnosis === undefined) {
    return <div>{code}</div>;
  } else {
    return (
      <div>
        {code} {diagnosis.name}
      </div>
    );
  }
};

export default DiagnosisListing;
