import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Ჩვენი საიტი</h1>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">მთავარი</a>
          <a href="#" className="hover:text-blue-500 transition">სერვისები</a>
          <a href="#" className="hover:text-blue-500 transition">ჩვენს შესახებ</a>
          <a href="#" className="hover:text-blue-500 transition">კონტაქტი</a>
        </nav>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
          შესვლა
        </button>
      </div>
    </header>
  );
};

export default Header;
