import Header from "./components/header";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <Header title="მოგესალმებით ჩემს Vite პროექტში!" />
      <UserCard name="ნიკა" age={15} />
      <UserCard name="მარიამი" age={17} />
    </div>
  );
}

export default App;
