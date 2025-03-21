// src/components/UserCard.jsx
export default function UserCard({ name, age }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
        <h3>{name}</h3>
        <p>ასაკი: {age}</p>
      </div>
    );
  }
  