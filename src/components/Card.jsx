import hp2 from "../assets/hp2-col-1-icon.png";
import building from "../assets/building-700x450.jpg";
import work from "../assets/working-700x450.jpg";
import SportCenter from "../assets/sport-center.png";
import Book from "../assets/book.png";
import BusinessMan from "../assets/business-man-700x450.jpg";
import { Link } from "react-router-dom";
import '../Styles/Card.css'

function Card() {
  return (
    <div className="Card-container">

      {/* ===== Card 1 ===== */}
      <div className="Card">
        <div className="background-container">
          <div className="school-life">
            <div className="school-life-img">
              <img src={hp2} alt="school-life-icon" />
            </div>
            <div className="school-life-content">
              <h3>School Life</h3>
              <Link to="/">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="building-img">
          <img src={building} alt="school-building" />
        </div>

        <div className="wonder-ful-content">
          <p>
            A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring which I enjoy with my whole heart.
          </p>

          <div className="learn-more">
            <Link to="/">Learn More</Link>

            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M3,12H21m-3,3,3-3L18,9"
                  fill="none"
                  stroke="blue"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ===== Card 2 ===== */}
      <div className="Card">
        <div className="background-container">
          <div className="academic-container">
            <div className="book-img">
              <img src={Book} alt="book" />
            </div>
            <div className="academic-content">
              <h3>Academics</h3>
              <Link to="/">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="business-man">
          <img src={BusinessMan} alt="business-man" />
        </div>

        <div className="wonder-ful-content">
          <p>
            A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring which I enjoy with my whole heart.
          </p>

          <div className="learn-more">
            <Link to="/">Learn More</Link>

            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M3,12H21m-3,3,3-3L18,9"
                  fill="none"
                  stroke="blue"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ===== Card 3 ===== */}
      <div className="Card">
        <div className="background-container">
          <div className="athletics-container">
            <div className="athletic-img">
              <img src={SportCenter} alt="sport-center" />
            </div>
            <div className="athletic-content">
              <h3>Athletics</h3>
              <Link to="/">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="work-from-home">
          <img src={work} alt="work-from-home" />
        </div>

        <div className="wonder-ful-content">
          <p>
            A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring which I enjoy with my whole heart.
          </p>

          <div className="learn-more">
            <Link to="/">Learn More</Link>

            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M3,12H21m-3,3,3-3L18,9"
                  fill="none"
                  stroke="blue"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;
