import React from "react";
import "./style.css";
function Beauty() {
  return (
    <section className="beauty">
      <div className="container">
        <div className="beauty-cards">
          <div className="beauty-card1">
            <h2 className="card1-h2">The Beauty</h2>
            <h1 className="card1-h1">LOOKBOOK</h1>
            <p className="card1-p">VIEW COLLECTIONS</p>
          </div>
          <div className="beauty-card2">
            <p className="card2-p">Gafas sol Hawkers one </p>
            <div className="beauty-price">
              <p className="old-price">$29.50</p>
              <p className="new-price">$15.90</p>
            </div>
            <div className="dates">
              <div className="date">
                69 <br /> <span>days</span>
              </div>
              <div className="date">
                12 <br />
                <span>hrs</span>
              </div>
              <div className="date">
                54 <br /> <span>mins</span>
              </div>
              <div className="date">
                26 <br />
                <span>secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beauty;
