import React from "react";

const Hero = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="relative w-full h-full">
        <img alt="Background" className="w-full h-full object-cover" src="https://placehold.co/1920x1080" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl font-bold">Like a newborn,</h2>
          <h3 className="text-2xl">A fresh start to</h3>
          <h2 className="text-4xl font-bold">Redefine Health</h2>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2 text-white">
          {['facebook', 'linkedin', 'youtube', 'instagram'].map((platform) => (
            <a key={platform} className="text-2xl" href="#">
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
