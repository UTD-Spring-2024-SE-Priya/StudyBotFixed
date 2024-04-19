import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <header
        className="text-center my-10 "
        class="flex justify-around mt-5 items-center"
      >
        <div>
          <h1 className="text-4xl font-bold">Welcome to StudyBot</h1>
          <p className="text-xl my-4">Your personal education assistant.</p>
        </div>
        <NavLink to="/signup">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-1/2 ">
            Get Started
          </button>
        </NavLink>
      </header>
      <section>
        <h2 className="text-3xl text-center font-semibold my-6">
          A better way to study
        </h2>
        <p className="text-center mb-10">
          Engage with our chatbot to find answers, explanations, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center border border-gray-200 rounded shadow">
            <div
              className="text-green-500 w-12 h-12 mx-auto mb-3 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/path-to-your-icon/intelligent-ai-icon.png')",
              }}
            ></div>
            <h3 className="font-bold mb-3">Intelligent AI</h3>
            <p>
              Our chatbot uses the latest AI technology to understand and assist
              with your educational needs.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center border border-gray-200 rounded shadow">
            <div
              className="text-green-500 w-12 h-12 mx-auto mb-3 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/path-to-your-icon/wide-range-icon.png')",
              }}
            ></div>
            <h3 className="font-bold mb-3">Wide Range of Topics</h3>
            <p>
              Whether it's math, science, history, or language arts, EduBot can
              help.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center border border-gray-200 rounded shadow">
            <div
              className="text-green-500 w-12 h-12 mx-auto mb-3 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/path-to-your-icon/support-icon.png')",
              }}
            ></div>
            <h3 className="font-bold mb-3">24/7 Support</h3>
            <p>
              StudyBot is available anytime, anywhere. Get the help you need at
              any hour of the day.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center border border-gray-200 rounded shadow">
            <div
              className="text-green-500 w-12 h-12 mx-auto mb-3 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/path-to-your-icon/personalized-learning-icon.png')",
              }}
            ></div>
            <h3 className="font-bold mb-3">Personalized Learning</h3>
            <p>
              StudyBot tailors its responses to your individual learning style
              and pace.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center py-4 mt-20"></div>
    </div>
  );
};

export default Home;
