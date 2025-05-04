import React, { useState } from "react";

function Dashboard({ onAddPost }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAddPost(text);
      setText("");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 flex-1"
        placeholder="შეიყვანეთ პოსტის ტექსტი"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}

export default Dashboard;
