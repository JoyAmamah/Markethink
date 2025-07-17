import React from "react";
import backgroundImage from "../../assets/hero.png";
import NavBar from "./NavBar";
import Support from "./Support";
import Service from "./Service";
import Process from "./Process";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <section
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="banner"
        aria-label="Hero Section"
      >
        <NavBar />
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4 max-w-2xl">
            <h2 className="flex items-center justify-center text-xl opacity-60 md:text-2xl font-semibold text-white mb-4">
              <span className="w-16 border-t border-white opacity-50 mr-4"></span>
              <span className="whitespace-nowrap">The Best</span>
              <span className="w-16 border-t border-white opacity-50 ml-4"></span>
            </h2>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing
            </h1>

            <p className="text-lg md:text-xl text-white opacity-80">
              Completely synergize resource-taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              experiences.
            </p>
            <button className="bg-[#98AA28] m-8 w-32 h-12 rounded-4xl hover:bg-[#a7c36a]">
              Get Started
            </button>
          </div>
        </div>
      </section>
        <Support />
      <div className="px-4 md:px-10 py-16 mt-4 space-y-20">
        <Service />
        <Process />
      </div>
    </main>
  );
};

export default Home;
