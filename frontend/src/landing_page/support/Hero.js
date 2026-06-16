import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="support-top-bar px-5 pt-5 pb-4">
        <h4>Support Portal</h4>
        <a className="support-link" href="">Track Tickets</a>
      </div>

      <div className="support-content row px-5 pb-5">
        <div className="col-lg-6 col-12 support-search-panel">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <div className="support-search-input">
            <input placeholder="Eg: how do I activate F&O, why is my order getting rejected.." />
          </div>
          <div className="support-tags mt-4">
            <a href="" className="support-tag">Track account opening</a>
            <a href="" className="support-tag">Track segment activation</a>
            <a href="" className="support-tag">Intraday margins</a>
            <a href="" className="support-tag">Kite user manual</a>
          </div>
        </div>

        <div className="col-lg-6 col-12 support-featured-panel mt-4 mt-lg-0">
          <div className="featured-header">
            <h1>Featured</h1>
          </div>
          <ol className="featured-list">
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;