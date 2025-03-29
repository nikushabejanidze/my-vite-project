import ProfileCard from "./components/ProfileCard";

const Button = ({ children, color }) => {
  return (
    <button className={`px-4 py-2 rounded-lg text-white ${color}`}>
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10 bg-gray-100 min-h-screen p-6">
      <ProfileCard name="John Doe" age={25}>
        <Button color="bg-blue-500 hover:bg-blue-600">Follow</Button>
      </ProfileCard>

      <ProfileCard name="Jane Smith" age={30}>
        <Button color="bg-green-500 hover:bg-green-600">Message</Button>
        <Button color="bg-red-500 hover:bg-red-600">Unfollow</Button>
      </ProfileCard>

      <ProfileCard name="Alice Johnson" age={28}>
        <Button color="bg-purple-500 hover:bg-purple-600">View Profile</Button>
      </ProfileCard>
    </div>
  );
}

export default App;
