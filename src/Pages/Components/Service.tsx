import React from "react";
import group1 from "../../assets/Group 542.png";
import group2 from "../../assets/Group 554.png";
import group3 from "../../assets/Group 555.png";
import group4 from "../../assets/Group 556.png";
import group5 from "../../assets/Group 636.png";

const Service = () => {
  const serviceList = [
    {
      img: group1,
      name: "Content Strategy",
      desc: "All our content marketing service packages include a custom content strategy",
    },
    {
      img: group2,
      name: "Content Development",
      desc: "We create a content calendar for your company’s must-share content",
    },
    {
      img: group3,
      name: "Content Creation",
      desc: "Experienced in copywriting and marketing team begins creating content",
    },
    {
      img: group4,
      name: "Content Optimization",
      desc: "Your content marketing management services also include SEO",
    },
  ];

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-12 px-6 md:px-12 py-16">
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mt-4 mb-6">
            We’re Strategic Digital Marketing Agency
          </h1>
          <p className="text-gray-700 mb-6 max-w-md">
            We’ve created a full-stack structure for our working workflow processes,
            where from the funny the century initial all made, have spare to negatives.
          </p>
          <a className="text-[#A3B938] font-medium hover:underline" href="#">
            See More <span>→</span>
          </a>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-left transition hover:shadow-lg"
            >
              <img
                src={service.img}
                alt={`${service.name} Icon`}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h2 className="text-xl text-[#253D32] font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-10">
        <img src={group5} alt="Social Media Promotion" className="w-full h-auto object-cover" />
        <div className="p-12">
          <h1 className="text-2xl  md:text-3xl font-bold mb-4">
            Increase Business on Social Media Reach
          </h1>
          <p className="text-gray-700 mb-6">
            Using our network of industry influencers, we help promote your content.
          </p>
          <button className="bg-[#98AA28] text-white w-36 h-12 rounded-full hover:bg-[#a7c36a] transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
