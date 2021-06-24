import React from "react";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="myWork" className="container myWork">
      <section className="content container">
        {/* title: shop-a-lot  */}
        <a
          href="https://shop-a-lot.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* images */}
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/shopalot/homepage(logged_out).jpg"
            }
            alt="Shop-A-Lot e-commerce site"
            data-repeat="true"
            data-show-0={
              process.env.PUBLIC_URL +
              "/assets/images/shopalot/homepage(logged_out).jpg"
            }
            data-show-1={
              process.env.PUBLIC_URL + "/assets/images/shopalot/signup.jpg"
            }
            data-show-2={
              process.env.PUBLIC_URL + "/assets/images/shopalot/login.jpg"
            }
            data-show-3={
              process.env.PUBLIC_URL +
              "/assets/images/shopalot/homepage(logged_in).jpg"
            }
            data-show-4={
              process.env.PUBLIC_URL + "/assets/images/shopalot/category.jpg"
            }
            data-show-5={
              process.env.PUBLIC_URL + "/assets/images/shopalot/product.jpg"
            }
            data-show-6={
              process.env.PUBLIC_URL + "/assets/images/shopalot/cart.jpg"
            }
            data-show-7={
              process.env.PUBLIC_URL + "/assets/images/shopalot/backpack.jpg"
            }
          />
          {/* project details */}
          <div className="img-text">
            <span className="project-name">Shop-A-Lot</span>
            <br />
            <span className="technologies">
              CSS, Javascript, NodeJS, Express, Sequelize, Handlebars, bCrypt,
              NodeMail, Group Project
            </span>
          </div>
        </a>
        {/* title: code quiz */}
        <a
          href="https://chip-l.github.io/jsCodeQuiz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* images */}
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/jsCodeQuiz/OpeningScreenScreenshot.jpg"
            }
            alt="Javascript Code Quiz webpage"
            data-repeat="true"
            data-show-0={
              process.env.PUBLIC_URL +
              "/assets/images/jsCodeQuiz/OpeningScreenScreenshot.jpg"
            }
            data-show-1={
              process.env.PUBLIC_URL +
              "/assets/images/jsCodeQuiz/JSQuizScreenshot.jpg"
            }
            data-show-2={
              process.env.PUBLIC_URL +
              "/assets/images/jsCodeQuiz/GameOverScreenshot.jpg"
            }
            data-show-3={
              process.env.PUBLIC_URL +
              "/assets/images/jsCodeQuiz/HighScoresScreenshot.jpg"
            }
          />
          {/* project details */}
          <div className="img-text">
            <span className="project-name">Javascript Code Quiz</span>
            <br />
            <span className="technologies">CSS, Javascript</span>
          </div>
        </a>
        {/* title: joke trivia */}
        <a
          href="https://chip-l.github.io/jokeTrivia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* images */}
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/JokeTrivia/joke-trivia-still.jpg"
            }
            data-gif="true"
            data-still={
              process.env.PUBLIC_URL +
              "/assets/images/JokeTrivia/joke-trivia-still.jpg"
            }
            data-active={
              process.env.PUBLIC_URL +
              "/assets/images/JokeTrivia/joke-trivia-demo.gif"
            }
            alt="Joke Trivia webpage"
          />
          {/* project details */}
          <div className="img-text">
            <span className="project-name">Joke Trivia</span>
            <br />
            <span className="technologies">
              jQuery, Bootstrap, API, Group Project
            </span>
          </div>
        </a>
        {/* title: weather dashboard */}
        <a
          href="https://chip-l.github.io/weatherDashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/weatherDashboard.jpg"}
            alt="Weather Dashboard webpage"
          />
          <div className="img-text">
            <span className="project-name">Weather Dashboard</span>
            <br />
            <span className="technologies">jQuery, Bootstrap, API</span>
          </div>
        </a>
        {/* title: match game */}
        <a
          href="https://chip-l.github.io/Match_Game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/MatchGame.jpg"}
            alt="Match Game webpage"
          />
          <div className="img-text">
            <span className="project-name">Match Game</span>
            <br />
            <span className="technologies">Javascript</span>
          </div>
        </a>
      </section>
    </section>
  );
}

export default Portfolio;
