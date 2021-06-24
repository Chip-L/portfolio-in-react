import React from "react";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="myWork" class="container myWork">
      <section class="content container">
        {/* title: shop-a-lot  */}
        <a
          href="https://shop-a-lot.herokuapp.com/"
          target="_blank"
          rel="noopener"
        >
          {/* images */}
          <img
            src="./assets/images/shopalot/homepage(logged_out).jpg"
            alt="Shop-A-Lot e-commerce site"
            data-repeat="true"
            data-show-0="./assets/images/shopalot/homepage(logged_out).jpg"
            data-show-1="./assets/images/shopalot/signup.jpg"
            data-show-2="./assets/images/shopalot/login.jpg"
            data-show-3="./assets/images/shopalot/homepage(logged_in).jpg"
            data-show-4="./assets/images/shopalot/category.jpg"
            data-show-5="./assets/images/shopalot/product.jpg"
            data-show-6="./assets/images/shopalot/cart.jpg"
            data-show-7="./assets/images/shopalot/backpack.jpg"
          />
          {/* project details */}
          <div class="img-text">
            <span class="project-name">Shop-A-Lot</span>
            <br />
            <span class="technologies">
              CSS, Javascript, NodeJS, Express, Sequelize, Handlebars, bCrypt,
              NodeMail, Group Project
            </span>
          </div>
        </a>
        {/* title: code quiz */}
        <a
          href="https://chip-l.github.io/jsCodeQuiz/"
          target="_blank"
          rel="noopener"
        >
          {/* images */}
          <img
            src="./assets/images/jsCodeQuiz/OpeningScreenScreenshot.jpg"
            alt="Javascript Code Quiz webpage image"
            data-repeat="true"
            data-show-0="./assets/images/jsCodeQuiz/OpeningScreenScreenshot.jpg"
            data-show-1="./assets/images/jsCodeQuiz/JSQuizScreenshot.jpg"
            data-show-2="./assets/images/jsCodeQuiz/GameOverScreenshot.jpg"
            data-show-3="./assets/images/jsCodeQuiz/HighScoresScreenshot.jpg"
          />
          {/* project details */}
          <div class="img-text">
            <span class="project-name">Javascript Code Quiz</span>
            <br />
            <span class="technologies">CSS, Javascript</span>
          </div>
        </a>
        {/* title: joke trivia */}
        <a
          href="https://chip-l.github.io/jokeTrivia/"
          target="_blank"
          rel="noopener"
        >
          {/* images */}
          <img
            src="./assets/images/JokeTrivia/joke-trivia-still.jpg"
            data-gif="true"
            data-still="./assets/images/JokeTrivia/joke-trivia-still.jpg"
            data-active="./assets/images/JokeTrivia/joke-trivia-demo.gif"
            alt="Joke Trivia webpage image"
          />
          {/* project details */}
          <div class="img-text">
            <span class="project-name">Joke Trivia</span>
            <br />
            <span class="technologies">
              jQuery, Bootstrap, API, Group Project
            </span>
          </div>
        </a>
        {/* title: weather dashboard */}
        <a
          href="https://chip-l.github.io/weatherDashboard/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="./assets/images/weatherDashboard.jpg"
            alt="Weather Dashboard webpage image"
          />
          <div class="img-text">
            <span class="project-name">Weather Dashboard</span>
            <br />
            <span class="technologies">jQuery, Bootstrap, API</span>
          </div>
        </a>
        {/* title: match game */}
        <a
          href="https://chip-l.github.io/Match_Game/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="./assets/images/MatchGame.jpg"
            alt="Match Game webpage image"
          />
          <div class="img-text">
            <span class="project-name">Match Game</span>
            <br />
            <span class="technologies">Javascript</span>
          </div>
        </a>
      </section>
    </section>
  );
}

export default Portfolio;
