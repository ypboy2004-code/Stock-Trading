import React from "react";

function Hero() {
  return (
        <div className="container-fluid" id="supportHero">
         
          <div className=" p-5 mt-5" id="supportTitle">
            <h4>Support Portal</h4>
            
              <h4>Track Tickets</h4>
          
          </div>
          <div className="row " id="supportTitle">
            <div className="col-6 p-5 ">
              <h1>Search for an answer or browser help topics to create a ticket</h1>
              <input placeholder="Eg. how do I activate F&Q" /><br/>
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a> 
              <a href="">Kite user manual</a>
            </div>
            <div className="col-6 p-5  ">
              <h1 className="fs-3"> Featured</h1>
              <ol>
                <li>
                  <a href="">current Takeovers and Delisting- January 2024</a>
                </li>
                <li>
                  <a href="">Latest Intraday leverages - MIN & CO</a>
                </li>
              </ol>
          
            </div>
          </div>

        </div>
  );
}

export default Hero;
