import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <img alt="Medfort Logo" className="h-12" src="https://placehold.co/50x50" />
        <div>
          <h1 className="text-2xl font-bold text-[#b08a3e]">Medfort</h1>
          <p className="text-sm text-[#b08a3e]">Hospital and Clinic</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-4">
        {['DOCTORS', 'SERVICES', 'INSURANCE', 'EVENTS', 'TAMAM CARD', 'CONTACT'].map((item) => (
          <a key={item} className="text-[#1a1a1a] hover:text-[#b08a3e]" href="#">{item}</a>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <button className="bg-[#2d2d6d] text-white px-4 py-2 rounded-full">
          Online Pharmacy <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="bg-[#2d2d6d] text-white px-4 py-2 rounded-full">
          En <i className="fas fa-chevron-down"></i>
        </button>
        <button className="bg-[#2d2d6d] text-white px-4 py-2 rounded-full">Appointment</button>
      </div>
    </header>
  );
};

export default Header;