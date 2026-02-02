import '../Styles/tour.css';
import shutterstock1359 from '../assets/shutterstock_135948689-150x150.jpg';
import shutterstock2182 from '../assets/shutterstock_218235004-150x150.jpg';
import shutterstock481 from '../assets/shutterstock_481869205-150x150.jpg';
import shutterstock361 from '../assets/shutterstock_361397258-150x150.jpg';
import shutterstock2133 from '../assets/shutterstock_213333985-150x150.jpg';
import shutterstock160 from '../assets/shutterstock_160526219-150x150.jpg';

function VideoTour() {
    return (
        <>
            {/* school-video tour container */}
            <div className="school-video-tour-container">
                <div className="school-video-tour">
                    <div className="school-content-div">
                        <h3>School Video Tour</h3>
                        <hr />
                    </div>
                    <div className="video-img">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z"
                                    stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div className="take-a-tour">
                        <p>Take a tour in Kingster and you will find the best school in the state. The video will take you
                            to every places in this school.</p>
                    </div>
                </div>

                <div className="School-news-update-container">
                    <div className="school-news-content">
                        <h3>School News & Updates</h3>
                        <hr />
                    </div>
                    <div className="images-content-container">
                        <div className="school-news-container">
                            <div className="content-container">
                                <div className="shutter-sock-img">
                                    <img src={shutterstock1359} alt="" />
                                </div>
                                <div className="date-content">
                                    <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                    <a href="#">
                                        <h3>Professor Albert joint research on mobile money in Tanzania
                                        </h3>
                                    </a>
                                </div>
                            </div>

                            <div className="content-container">
                                <div className="shutter-sock-img">
                                    <img src={shutterstock2182} alt="" />
                                </div>
                                <div className="date-content">
                                    <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                    <a href="#">
                                        <h3>A Global MBA for the next generation of business leaders</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="content-second-container">
                                <div className="content-container">
                                    <div className="shutter-sock-img">
                                        <img src={shutterstock481} alt="" />
                                    </div>
                                    <div className="date-content">
                                        <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                        <a href="#">
                                            <h3>Professor Tom comments on voluntary recalls by snack brands</h3>
                                        </a>
                                    </div>
                                </div>

                                <div className="read-blog-btn">
                                    <a href="#">Read The Blog</a>
                                    <svg fill="#000000" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg"
                                        className="icon line">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path id="primary" d="M3,12H21m-3,3,3-3L18,9"
                                                style={{ fill: "none", stroke: "blue", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }}>
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="school-news-container">
                            <div className="content-container">
                                <div className="shutter-sock-img">
                                    <img src={shutterstock361} alt="" />
                                </div>
                                <div className="date-content">
                                    <p>JUNE 6, 2016 / BY JAMES SMITH</p>
                                    <a href="#">
                                        <h3>Professor Alexa is interviewed about Twitter’s valuation</h3>
                                    </a>
                                </div>
                            </div>

                            <div className="content-container">
                                <div className="shutter-sock-img">
                                    <img src={shutterstock2133} alt="" />
                                </div>
                                <div className="date-content">
                                    <p>JuNE 6, 2016 / BY JAMES SMITH</p>
                                    <a href="#">
                                        <h3>Kingster Public Safety Survey open through Nov. 30</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="content-container">
                                <div className="shutter-sock-img">
                                    <img src={shutterstock160} alt="" />
                                </div>
                                <div className="date-content">
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
        </>
    );
}

export default VideoTour;
