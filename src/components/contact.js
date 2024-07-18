import React from "react";
import "./contact.css";
import photo2 from "./minni1.jpg"; // Importing image for the second contact
import photo3 from "./divya.jpg";
import photo4 from "./radhika2.jpg";

const Contact = () => {
    return (
        <div className="contact-container">
            {/* Combined Contact Box */}
            <div className="combined-contact-box">
                {/* Divya Barker */}
                <div className="contact-details">
                    <div className="contact-photo">
                        <img src={photo3} alt="Divya Barker" />
                    </div>
                    <div>
                        <h2>Divya Barker</h2>
                        <p>Student</p>
                        <p>KLE TECH. UNIVERSITY, Angol</p>
                        <p>Belagavi, 590008</p>
                        <p>Phone: 7204875587</p>
                        <p>Email: Divyabarker25@gmail.com</p>
                    </div>
                </div>

                {/* Sakshi Gupta */}
                <div className="contact-details">
                    <div className="contact-photo">
                        <img src={photo2} alt="Sakshi Gupta" />
                    </div>
                    <div>
                        <h2>Sakshi Gupta</h2>
                        <p>Student</p>
                        <p>KLE TECH. UNIVERSITY, Angol</p>
                        <p>Belagavi, 590008</p>
                        <p>Phone: 7970881913</p>
                        <p>Email: Sakshi6951@gmail.com</p>
                    </div>
                </div>
                
                {/* Radhika Khot */}
                <div className="contact-details">
                    <div className="contact-photo">
                        <img src={photo4} alt="Radhika Khot" />
                    </div>
                    <div>
                        <h2>Radhika Khot</h2>
                        <p>Student</p>
                        <p>KLE TECH. UNIVERSITY, Angol</p>
                        <p>Belagavi, 590008</p>
                        <p>Phone: 7970881913</p>
                        <p>Email: Radhikakhot67@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
