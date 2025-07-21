import React from "react";
import pyramid from "../../assets/pyramid.png";

const Process = () => {
  const MessageList = [
    { text: "Update content on my website" },
    { text: "Improve User Experience" },
    { text: "Request Free website Review" },
    { text: "Improve your SEO Ranking" },
  ];

  return (
    <section className="bg-[#F6FBF9] py-16 px-4 md:px-10 text-center">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#273F2D] mb-2">
          How Can We Help You?
        </h1>
        <p className="text-lg text-gray-600">Let's do great work together</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 my-10">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
          <img
            src={pyramid}
            alt="pyramid"
            className="w-10 h-10 object-contain"
          />
        </div>

       <div className="hidden lg:flex flex-wrap justify-center items-center gap-1 px-4 py-4">
  {[1, 2, 3].map((_, idx) => (
    <React.Fragment key={idx}>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="w-3 lg:w-4 h-0.5 bg-gray-400" />
      ))}
      <div className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-gray-400 bg-white rounded-full shadow-sm" />
    </React.Fragment>
  ))}
</div>


      <div className="flex flex-row flex-wrap gap-6 justify-center items-center max-w-6xl mx-auto my-10 px-2">
        {MessageList.map((message, index) => (
          <div key={index}>
<h2
  className="w-48 font-semibold text-[#253D32] transition-all duration-200 ease-in-out hover:text-black hover:text-xl"
>
  {message.text}
</h2>
          </div>
        ))}
      </div>
      </div>

      <a className="text-[#A3B938] font-medium hover:underline" href="#">
        See More <span>→</span>
      </a>
    </section>
  );
};

export default Process;
