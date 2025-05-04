// src/CharacterCounter.jsx
import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const isTooLong = text.length > 100;

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="შეიყვანე ტექსტი"
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <p>სიმბოლოების რაოდენობა: {text.length}</p>
      {isTooLong && (
        <p style={{ color: "red" }}>
          ტექსტის სიგრძე არ უნდა აღემატებოდეს 100 სიმბოლოს!
        </p>
      )}
    </div>
  );
}

export default CharacterCounter;
