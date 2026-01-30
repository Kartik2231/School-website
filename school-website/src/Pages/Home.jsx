import unplash from '../assets/tyler-callahan-662157-unsplash-900x500.jpg'
import Book from '../assets/book.png';
import Business from '../assets/business-man-700x450.jpg';
import Working from '../assets/working-700x450.jpg';
import SportCenter from '../assets/sport-center.png';
import Shutterstock1359 from '../assets/shutterstock_135948689-150x150.jpg';
import Shutterstock2182 from '../assets/shutterstock_218235004-150x150.jpg';
import shutterstock481 from '../assets/shutterstock_481869205-150x150.jpg';
import Shutterstock361 from '../assets/shutterstock_361397258-150x150.jpg';
import shutterstock213 from '../assets/shutterstock_213333985-150x150.jpg'
import shutterstock160 from '../assets/shutterstock_160526219-150x150.jpg';
import tyler from '../assets/tyler-callahan-662157-unsplash-900x500.jpg'
import Building from '../assets/building-700x450.jpg'
import hp2 from '../assets/hp2-col-1-icon.png';
function Home() {
    <>
        <div class="Card-container">
            <div class="Card">
                <div class="background-container">
                    <div class="school-life">
                        <div class="school-life-img">
                            <img src="/images/hp2-col-1-icon.png" alt="" />
                        </div>
                        <div class="school-life-content">
                            <h3>School Life</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="building-img">
                    <img src="/images/building-700x450.jpg" alt="building-700x450" />
                </div>
                <div class="wonder-ful-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I
                        enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                    <div class="learn-more">
                        <a href="#">Learn More</a>
                        <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                            class="icon line">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                    style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="Card">
                <div class="background-container">
                    <div class="academic-container">
                        <div class="book-img">
                            <img src={Book} alt="book" />
                        </div>
                        <div class="academic-content">
                            <h3>Academics</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="business-man">
                    <img src={Business} alt="business-man" />
                </div>

                <div class="wonder-ful-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I
                        enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                    <div class="learn-more">
                        <a href="#">Learn More</a>
                        <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                            class="icon line">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                    style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="Card">
                <div class="background-container">
                    <div class="athletics-container">
                        <div class="athletic-img">
                            <img src={SportCenter} alt="athletics-container" />
                        </div>
                        <div class="athletic-content">
                            <h3>Athletics</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="work-from-home">
                    <img src={Working} alt="working-700x450" />
                </div>
                <div class="wonder-ful-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I
                        enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                    <div class="learn-more">
                        <a href="#">Learn More</a>
                        <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                            class="icon line">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                    style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- school-video tour container  --> */}
        <div class="school-video-tour-container">
            <div class="school-video-tour">
                <div class="school-content-div">
                    <h3>School Video Tour</h3>
                    <hr />
                </div>
                <div class="video-img">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z"
                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div class="take-a-tour">
                    <p>Take a tour in Kingster and you will find the best school in the state. The video will take you
                        to every places in this school.</p>
                </div>
            </div>

            <div class="School-news-update-container">
                <div class="school-news-content">
                    <h3>School News & Updates</h3>
                    <hr />
                </div>
                <div class="images-content-container">
                    <div class="school-news-container">
                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock1359} alt="shutterstock_135948689" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Professor Albert joint research on mobile money in Tanzania
                                    </h3>
                                </a>
                            </div>
                        </div>

                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock2182} alt="shutterstock_218235004" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>A Global MBA for the next generation of business leaders</h3>
                                </a>
                            </div>
                        </div>
                        <div class="content-second-container">
                            <div class="content-container">
                                <div class="shutter-sock-img">
                                    <img src={shutterstock481} alt="shutterstock481" />
                                </div>
                                <div class="date-content">
                                    <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                    <a href="#">
                                        <h3>Professor Tom comments on voluntary recalls by snack brands</h3>
                                    </a>
                                </div>
                            </div>

                            <div class="read-blog-btn">
                                <a href="#">Read The Blog</a>
                                <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                                    class="icon line">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                            style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="school-news-container">
                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock361} alt="Shutterstock361" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Professor Alexa is interviewed about Twitter’s valuation</h3>
                                </a>
                            </div>
                        </div>

                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={shutterstock213} alt="shutterstock213" />
                            </div>
                            <div class="date-content">
                                <p>JuNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Kingster Public Safety Survey open through Nov. 30</h3>
                                </a>
                            </div>
                        </div>
                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={shutterstock160} alt="" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Audio Post Format</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="study-container">
            <div class="study-content">
                <h2>Apply for Admission</h2>
                <h3>Fall 2019 applications are now open</h3>
                <p>
                    We don’t just give students an education and experiences that set them up for success in a career. We
                    help
                    them
                    succeed in their career—to discover a field they’re passionate about and dare to lead it.
                </p>
                <div class="apply-btn">
                    <button>Apply Now</button>
                </div>
            </div>
        </div>

        {/* <!-- kingster-container started here  --> */}
        <section class="kingster-container">
            <div class="kingster-header">
                <h3>Kingster Events</h3>
                <hr />
            </div>

            <div class="kingster-event-content">
                <div class="kingster-content-container">
                    <div class="images-container">
                        <img src={tyler} alt="" />
                    </div>

                    <div class="date-container">
                        <div class="date">
                            <h2>17</h2>
                            <h4>DEC</h4>
                            <hr />
                        </div>

                        <div class="date-content-container">
                            <h2>Fintech & Key Investment Conference</h2>
                            <p class="time">1:00 pm - 1:00 pm</p>
                            <p class="grand-hall">Kingster Grand Hall</p>
                        </div>
                    </div>
                </div>

                <div class="kingster-content-container">
                    <div class="images-container">
                        <img src={tyler} alt="tyler" />
                    </div>

                    <div class="date-container">
                        <div class="date">
                            <h2>04</h2>
                            <h4>NOV</h4>
                            <hr />
                        </div>

                        <div class="date-content-container">
                            <h2>Sport Management Information Webinar</h2>
                            <p class="time">1:00 pm - 1:00 pm</p>
                            <p class="grand-hall">Kingster Grand Hall</p>
                        </div>
                    </div>
                </div>

                <div class="kingster-content-container">
                    <div class="images-container">
                        <img src={tyler} alt="tyler" />
                    </div>

                    <div class="date-container">
                        <div class="date">
                            <h2>11</h2>
                            <h4>SEP</h4>
                            <hr />
                        </div>

                        <div class="date-content-container">
                            <h2>Planning and Facilitating Effective Meetings</h2>
                            <p class="time">8:00 am - 8:00 am</p>
                            <p class="grand-hall">Kingster Grand Hall</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="view-all-btn">
                <a href="#" class="view-all">View All Events →</a>
            </div>
        </section>
        <div class="Card-container">
            <div class="Card">
                <div class="background-container">
                    <div class="school-life">
                        <div class="school-life-img">
                            <img src={hp2} alt="hp2" />
                        </div>
                        <div class="school-life-content">
                            <h3>School Life</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="building-img">
                    <img src={Building} alt="building-700x450" />
                </div>
                <div class="wonder-ful-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I
                        enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                    <div class="learn-more">
                        <a href="#">Learn More</a>
                        <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                            class="icon line">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                    style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="Card">
                <div class="background-container">
                    <div class="academic-container">
                        <div class="book-img">
                            <img src="/images/book.png" alt="book" />
                        </div>
                        <div class="academic-content">
                            <h3>Academics</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="business-man">
                    <img src="/images/business-man-700x450.jpg" alt="business-man" />
                </div>

                <div class="wonder-ful-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I
                        enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                    <div class="learn-more">
                        <a href="#">Learn More</a>
                        <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                            class="icon line">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                    style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="Card">
                <div class="background-container">
                    <div class="athletics-container">
                        <div class="athletic-img">
                            <img src={SportCenter} alt="athletics-container" />
                        </div>
                        <div class="athletic-content">
                            <h3>Athletics</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="work-from-home">
                    <img src={Working} alt="working-700x450" />
                </div>
                <div class="wonder-ful-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I
                        enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                    <div class="learn-more">
                        <a href="#">Learn More</a>
                        <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                            class="icon line">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                    style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- school-video tour container  --> */}
        <div class="school-video-tour-container">
            <div class="school-video-tour">
                <div class="school-content-div">
                    <h3>School Video Tour</h3>
                    <hr />
                </div>
                <div class="video-img">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z"
                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div class="take-a-tour">
                    <p>Take a tour in Kingster and you will find the best school in the state. The video will take you
                        to every places in this school.</p>
                </div>
            </div>

            <div class="School-news-update-container">
                <div class="school-news-content">
                    <h3>School News & Updates</h3>
                    <hr />
                </div>
                <div class="images-content-container">
                    <div class="school-news-container">
                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock1359} alt="" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Professor Albert joint research on mobile money in Tanzania
                                    </h3>
                                </a>
                            </div>
                        </div>

                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock2182} alt="" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>A Global MBA for the next generation of business leaders</h3>
                                </a>
                            </div>
                        </div>
                        <div class="content-second-container">
                            <div class="content-container">
                                <div class="shutter-sock-img">
                                    <img src={shutterstock481} alt="" />
                                </div>
                                <div class="date-content">
                                    <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                    <a href="#">
                                        <h3>Professor Tom comments on voluntary recalls by snack brands</h3>
                                    </a>
                                </div>
                            </div>

                            <div class="read-blog-btn">
                                <a href="#">Read The Blog</a>
                                <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                                    class="icon line">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                            style="fill: none; stroke: blue; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="school-news-container">
                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock361} alt="" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Professor Alexa is interviewed about Twitter’s valuation</h3>
                                </a>
                            </div>
                        </div>

                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={Shutterstock2182} alt="" />
                            </div>
                            <div class="date-content">
                                <p>JuNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Kingster Public Safety Survey open through Nov. 30</h3>
                                </a>
                            </div>
                        </div>
                        <div class="content-container">
                            <div class="shutter-sock-img">
                                <img src={shutterstock160} alt="" />
                            </div>
                            <div class="date-content">
                                <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                <a href="#">
                                    <h3>Audio Post Format</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="study-container">
            <div class="study-content">
                <h2>Apply for Admission</h2>
                <h3>Fall 2019 applications are now open</h3>
                <p>
                    We don’t just give students an education and experiences that set them up for success in a career. We
                    help
                    them
                    succeed in their career—to discover a field they’re passionate about and dare to lead it.
                </p>
                <div class="apply-btn">
                    <button>Apply Now</button>
                </div>
            </div>
        </div>

        {/* <!-- kingster-container started here  --> */}
        <section class="kingster-container">
            <div class="kingster-header">
                <h3>Kingster Events</h3>
                <hr />
            </div>

            <div class="kingster-event-content">
                <div class="kingster-content-container">
                    <div class="images-container">
                        <img src={unplash} alt="" />
                    </div>

                    <div class="date-container">
                        <div class="date">
                            <h2>17</h2>
                            <h4>DEC</h4>
                            <hr />
                        </div>

                        <div class="date-content-container">
                            <h2>Fintech & Key Investment Conference</h2>
                            <p class="time">1:00 pm - 1:00 pm</p>
                            <p class="grand-hall">Kingster Grand Hall</p>
                        </div>
                    </div>
                </div>

                <div class="kingster-content-container">
                    <div class="images-container">
                        <img src={tyler} alt="" />
                    </div>

                    <div class="date-container">
                        <div class="date">
                            <h2>04</h2>
                            <h4>NOV</h4>
                            <hr />
                        </div>

                        <div class="date-content-container">
                            <h2>Sport Management Information Webinar</h2>
                            <p class="time">1:00 pm - 1:00 pm</p>
                            <p class="grand-hall">Kingster Grand Hall</p>
                        </div>
                    </div>
                </div>

                <div class="kingster-content-container">
                    <div class="images-container">
                        <img src={tyler} alt="" />
                    </div>

                    <div class="date-container">
                        <div class="date">
                            <h2>11</h2>
                            <h4>SEP</h4>
                            <hr />
                        </div>

                        <div class="date-content-container">
                            <h2>Planning and Facilitating Effective Meetings</h2>
                            <p class="time">8:00 am - 8:00 am</p>
                            <p class="grand-hall">Kingster Grand Hall</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="view-all-btn">
                <a href="#" class="view-all">View All Events →</a>
            </div>
        </section>
    </>
}

export default Home;