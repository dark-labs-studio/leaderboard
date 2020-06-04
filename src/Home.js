import React from 'react';

const Home = () => (
  <div className="content-container">
    <div className="content-title-group">
      <h2 className="title">Global Leaderboard</h2>
      <p>See how you rank agains friends or the world!</p>
      <br />
      <div className="button-group">
        <button className="button" aria-label="My List" tabIndex="0">
          <a href="/products">
            Match History
          </a>
        </button>
        <button className="button" aria-label="My Discounts">
          <a href="/cosmos">
            Sports
          </a>
        </button>
        <button className="button" aria-label="My Discounts">
          <a
            href="https://github.com/johnpapa/shopathome"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Match
          </a>
        </button>
      </div>{' '}
    </div>
  </div>
);

export default Home;
