const ProfileCard = ({ name, age, children }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg border border-gray-200 w-72 text-center">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <div className="mt-4 flex justify-center gap-2">{children}</div>
    </div>
  );
};

export default ProfileCard;
