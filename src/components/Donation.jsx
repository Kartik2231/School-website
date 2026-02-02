import Envelop from '../assets/envelope.png'
import Donor from '../assets/donor-600x320.jpg'
import '../Styles/Donation.css'

function Donation() {
    return (
        <>
            <div className="donation-container">
                <div className="clock-tower-img">
                    <div className="quick-link">
                        <div className="link">
                            <i className="icon-link" style={{ color: '#ffffff' }}></i>
                            <h3>Quick Links</h3>
                        </div>
                        <li><a>Alumni & Donors</a></li>
                        <hr />
                        <li><a>Athletic Calendar</a></li>
                        <hr />
                        <li><a>All Kingster’s Events</a></li>
                        <hr />
                        <li><a>Partnership & Out Reach</a></li>
                        <hr />
                        <li><a>Academic Programs</a></li>
                        <hr />
                        <li><a>Tution And Fees</a></li>
                        <hr />
                    </div>
                </div>

                <div className="subscribe-news-letter">
                    <div className="envelop-img">
                        <img src={Envelop} alt="envelope" />
                    </div>
                    <div className="subscribe-content">
                        <h3>Subscribe To Newsletter</h3>
                        <h4>Get updates to news & events</h4>
                        <p>
                            The Campaign for the Kingster University is the largest fundraising campaign in history. With a
                            historic
                        </p>

                        <div className="form">
                            <input type="email" placeholder="Your Email Address" id="input" />
                            <div className="subscribe-btn">
                                <a href="#">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="help-for-donation">
                    <div className="academic-students">
                        <img src={Donor} alt="donor-600x320" />
                    </div>
                    <h3>Donation helps us</h3>
                    <p>
                        The Campaign for the Kingster University is the <strong>largest fundraising campaign in history.</strong>
                        With a historic $1 billion goal, the campaign is expanding U of T’s global leadership capacity.
                    </p>
                    <div className="become-a-door-btn">
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g>
                                    <path
                                        d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                                        fill="#ffffff"
                                    />
                                </g>
                            </svg>
                            Become A donor
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donation
