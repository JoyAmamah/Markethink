import seo from '../../assets/heroBackground.png';
import group1 from "../../assets/Rectangle 334.png";
import group2 from "../../assets/Rectangle 335.png";
import { FiEye } from 'react-icons/fi';

const Article = () => {
  const ArticleList = [
    {
      img: group1,
      heading: "Content Writing",
      Date: "AUGUST 17, 2021",
      desc: "How to get hired at a top Digital Marketing",
      message: "Agency life. We’ve all seen the photos posted on social media – the cool...",
    },
    {
      img: group2,
      heading: "Content Marketing",
      Date: "AUGUST 17, 2021",
      desc: "Copywriting guidelines during the coronavirus",
      message: "Since the coronavirus hit earlier this year, it’s hard to go anywhere...",
    },
  ];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-10">
      <div className="lg:col-span-1">
        <h1 className="text-2xl font-bold mb-4 text-[#273f2d]">Read More Articles From Our Blog</h1>
        <img src={seo} alt="SEO" className="mb-4 w-full rounded-lg" />
        <p className="text-[#808371] font-semibold mb-1">AUGUST 17, 2021</p>
        <p className="mb-4 text-gray-800">10 Reasons to invest in SEO copywriting services</p>
        <a
          href="#"
          className="inline-block text-[#A3B938] font-medium hover:underline rounded-full px-4 py-2 border border-[#98AA28] hover:bg-[#EDFF8166] transition"
        >
          Read More
        </a>
      </div>

      <div className="lg:col-span-2 grid sm:grid-cols-2 mt-6 gap-6">
  {ArticleList.map((article, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4"
    >
      <h2 className="text-lg font-semibold text-[#273f2d] mb-5">
        {article.heading}
      </h2>
      <img
        src={article.img}
        alt={article.heading}
        className=" justify-items-startw-full h-40 object-contain rounded mb-5"
      />
      <p className="text-sm text-[#808371] font-medium">{article.Date}</p>
      <p className="text-gray-800 font-medium">{article.desc}</p>
      <p className="text-gray-600 text-sm mb-5">{article.message}</p>

      <div className="flex">
        <div className="flex items-center justify-center rounded-full w-10 h-10 border border-[#98AA28] cursor-pointer hover:bg-[#edff81] transition">
          <FiEye className="text-[#98AA28]" />
        </div>
      </div>
    </div>
  ))}
</div>

    </article>
  );
};

export default Article;
