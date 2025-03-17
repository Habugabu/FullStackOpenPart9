import { useState, useEffect } from "react";

import { DiaryEntry } from "./types";
import { getAllEntries, createEntry } from "./diaryService";

const App = () => {
  const [newComment, setNewComment] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newWeather, setNewWeather] = useState("sunny");
  const [newVisibility, setNewVisibility] = useState("great");
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  const entryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createEntry({
      comment: newComment,
      date: newDate,
      weather: newWeather,
      visibility: newVisibility,
    }).then((data) => {
      setEntries(entries.concat(data));
    });
    setNewComment("");
  };

  return (
    <div>
      <h3>Add new entry</h3>
      <form onSubmit={entryCreation}>
        date{" "}
        <input
          type="date"
          value={newDate}
          required={true}
          onChange={(event) => setNewDate(event.target.value)}
        ></input>
        <br />
        visibility:
        <input
          type="radio"
          name="vis"
          required={true}
          onChange={() => setNewVisibility("great")}
        ></input>
        great
        <input
          type="radio"
          name="vis"
          onChange={() => setNewVisibility("good")}
        ></input>
        good
        <input
          type="radio"
          name="vis"
          onChange={() => setNewVisibility("ok")}
        ></input>
        ok
        <input
          type="radio"
          name="vis"
          onChange={() => setNewVisibility("poor")}
        ></input>
        poor
        <br />
        weather:
        <input
          type="radio"
          name="weather"
          required={true}
          onChange={() => setNewWeather("sunny")}
        ></input>
        sunny
        <input
          type="radio"
          name="weather"
          onChange={() => setNewWeather("rainy")}
        ></input>
        rainy
        <input
          type="radio"
          name="weather"
          onChange={() => setNewWeather("cloudy")}
        ></input>
        cloudy
        <input
          type="radio"
          name="weather"
          onChange={() => setNewWeather("stormy")}
        ></input>
        stormy
        <input
          type="radio"
          name="weather"
          onChange={() => setNewWeather("windy")}
        ></input>
        windy
        <br />
        comment
        <input
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />{" "}
        <br />
        <button type="submit">add</button>
      </form>
      <h3>Diary entries</h3>
      <div>
        {entries.map((entry) => (
          <div key={entry.id}>
            <p>
              <b>{entry.date}</b>
            </p>
            <p>
              visibility: {entry.visibility}
              <br />
              weather: {entry.weather}
              <br />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
