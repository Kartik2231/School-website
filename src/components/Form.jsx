import { Link } from "react-router-dom";
import '../Styles/Form.css'
function Form() {
    return (
        <>
            {/* <!-- form created here  --> */}
            <form action="">
                <div className="form-container">
                    <h2>Search For Courses</h2>
                    <div className="input-container">
                        <div className="flexbox-container">
                            <div className="input-fields">
                                <div className="input">
                                    <input type="text" placeholder="Keywords" /> <br />
                                </div>
                                <div className="select-box">
                                    <select name="opt" id="option">
                                        <option value="opt1">Level</option>
                                        <option value="opt2">2nd Grade</option>
                                        <option value="opt3">3rd Grade</option>
                                        <option value="opt4">4th Grade</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <div className="input-fields">
                                <div className="input">
                                    <input type="text" placeholder="Course ID" /> <br />
                                </div>
                                <div className="select-box">
                                    <select name="opt" id="options">
                                        <option value="opt1">Instructor</option>
                                        <option value="opt2">Alan Smith</option>
                                        <option value="opt3">Jane Doe</option>
                                        <option value="opt4">Sam Smith</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flexbox-container">
                            <div className="input-fields">
                                <div className="select-box">
                                    <select name="opt" id="opt">
                                        <option value="opt">Department
                                        </option>
                                        <option value="opt2">Arts</option>
                                        <option value="opt3">Mathmetics</option>
                                        <option value="opt4">Science</option>
                                    </select>
                                </div>

                                <div className="select-box">
                                    <select name="opt" id="opts">
                                        <option value="opt1">Semester</option>
                                        <option value="opt2">Fall 2018</option>
                                        <option value="opt3">Spring 2019</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="course-btn">
                        <Link to="#">Search Courses</Link>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Form;