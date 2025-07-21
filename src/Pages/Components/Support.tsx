import React from 'react';
import facebook from '../../assets/facebook.png';
import logitech from '../../assets/logitech.png';
import amazon from '../../assets/amazon.png';
import slack from '../../assets/slack.png';
import google from '../../assets/google.png';

const Support = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 px-4 py-10 bg-[#F6FBF9] sm:justify-between sm:px-8 md:px-16">
      <img src={slack} alt="Slack Logo" className="w-24 h-8 sm:w-28 sm:h-10 object-contain" />
      <img src={amazon} alt="Amazon Logo" className="w-24 h-8 sm:w-28 sm:h-10 object-contain" />
      <img src={logitech} alt="Logitech Logo" className="w-24 h-8 sm:w-28 sm:h-10 object-contain" />
      <img src={google} alt="Google Logo" className="w-24 h-8 sm:w-28 sm:h-10 object-contain" />
      <img src={facebook} alt="Facebook Logo" className="w-24 h-8 sm:w-28 sm:h-10 object-contain" />
    </section>
  );
};

export default Support;
