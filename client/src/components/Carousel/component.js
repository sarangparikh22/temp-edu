import React, { Component } from "react";
import Grad1 from "./Grad1.jpeg";
import Grad2 from "./Grad2.jpeg";
import Uni1 from "./Uni_1.jpg";
import "./Carousel.css";

class carousel extends Component {
  render() {
    return (
      <div className="carousel-start">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img className="ihr" src={Uni1} alt="Los Angeles" />

              <div className="carousel-caption">
                <h3>University</h3>
                <p>This University is always fun!</p>
              </div>
            </div>

            <div className="item">
              <img className="ihr" src={Grad1} alt="Chicago" />
              <div className="carousel-caption">
                <h3>University</h3>
                <p>Brainy nerds!</p>
              </div>
            </div>

            <div className="item">
              <img className="ihr" src={Grad2} alt="Los Angeles" />
              <div className="carousel-caption">
                <h3>University</h3>
                <p>Now that!</p>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default carousel;
