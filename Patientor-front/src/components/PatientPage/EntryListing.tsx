import { Entry } from "../../types";

interface Props {
  entry: Entry;
}

const EntryListing = ({ entry }: Props) => {
  if (entry.diagnosisCodes !== undefined) {
    return (
      <div>
        {entry.date} <i>{entry.description}</i> <br />
        <ul>
          {entry.diagnosisCodes.map((code) => (
            <li key={code}>{code}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {entry.date} <i>{entry.description}</i>
    </div>
  );
};

export default EntryListing;
