import '../Styles/Kingster.css'
function Kingster() {
    return (
        <>
            {/* <!-- kingster-container started here  --> */}
            <section className="kingster-container">
                <div className="kingster-header">
                    <h3>Kingster Events</h3>
                    <hr />
                </div>

                <div className="kingster-event-content">
                    <div className="kingster-content-container">
                        <div className="images-container">
                            <img src="/images/tyler-callahan-662157-unsplash-900x500.jpg" alt="" />
                        </div>

                        <div className="date-container">
                            <div className="date">
                                <h2>17</h2>
                                <h4>DEC</h4>
                                <hr />
                            </div>

                            <div className="date-content-container">
                                <h2>Fintech & Key Investment Conference</h2>
                                <p className="time">1:00 pm - 1:00 pm</p>
                                <p className="grand-hall">Kingster Grand Hall</p>
                            </div>
                        </div>
                    </div>

                    <div className="kingster-content-container">
                        <div className="images-container">
                            <img src="/images/tyler-callahan-662157-unsplash-900x500.jpg" alt="" />
                        </div>

                        <div className="date-container">
                            <div className="date">
                                <h2>04</h2>
                                <h4>NOV</h4>
                                <hr />
                            </div>

                            <div className="date-content-container">
                                <h2>Sport Management Information Webinar</h2>
                                <p className="time">1:00 pm - 1:00 pm</p>
                                <p className="grand-hall">Kingster Grand Hall</p>
                            </div>
                        </div>
                    </div>

                    <div className="kingster-content-container">
                        <div className="images-container">
                            <img src="/images/tyler-callahan-662157-unsplash-900x500.jpg" alt="" />
                        </div>

                        <div className="date-container">
                            <div className="date">
                                <h2>11</h2>
                                <h4>SEP</h4>
                                <hr />
                            </div>

                            <div className="date-content-container">
                                <h2>Planning and Facilitating Effective Meetings</h2>
                                <p className="time">8:00 am - 8:00 am</p>
                                <p className="grand-hall">Kingster Grand Hall</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="view-all-btn">
                    <a href="#" className="view-all">View All Events →</a>
                </div>
            </section>
            {/* kingster event code end here */}
        </>
    )
}
export default Kingster;