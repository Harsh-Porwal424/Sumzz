import React from "react";
import { TypeAnimation } from "react-type-animation";

import { logo } from "../assets";

const Hero = () => {
  const link =
    "https://www.youtube.com/watch?v=vpvtZZi5ZWk&ab_channel=JavaScriptMastery";

  return (
    <header
      className="w-full flex justify-center 
    items-center flex-col"
    >
      <nav
        className="flex justify-between 
    items-center w-full mb-10 pt-4"
      >
        <img src={logo} alt="Sums Logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open('/')}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        <TypeAnimation
          sequence={[
            " Get the gist.", 
            1000, 
            "Skip the rest", 
            1000,
            "Streamline your Reading",
            1000,

            ]}
          speed={50}
          repeat={Infinity}
        />

        <br className="max-md:hidden" />
        <span className="orange_gradient">with OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Short on time? Let Summ-it do the work for you. Our open-source article
        summarizer saves you time and effort by delivering quick, accurate
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
