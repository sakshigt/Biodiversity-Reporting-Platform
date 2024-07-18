import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./report.css"; // Import the CSS file

const Report = () => {
    const [pictures, setPictures] = useState([]);
    const [address, setAddress] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');

    const handlePictureUpload = (event) => {
        const files = event.target.files;
        const uploadedPictures = Array.from(files).map((file) => URL.createObjectURL(file));
        setPictures((prevPictures) => [...prevPictures, ...uploadedPictures]);
    };

    const handleUpload = async () => {
        const reportData = {
            address,
            selectedSpecies,
        };

        try {
            const response = await fetch('http://localhost:8081/api/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reportData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log("Report successfully uploaded:", result);

            // Show success message
            toast.success("Report successfully uploaded!");

            // Reset the input fields after uploading
            document.getElementById("fileInput").value = "";
            setAddress('');
            setSelectedSpecies('');
            setPictures([]);
        } catch (error) {
            console.error("There was a problem with the upload:", error);
            toast.error("There was a problem with the upload");
        }
    };

    return (
        <div className="report-container">
            <h1 className="report-heading">Report</h1>
            <input
                id="fileInput"
                className="report-input"
                type="file"
                accept="image/*"
                onChange={handlePictureUpload}
                multiple
            /><br></br>
            <input
                type="text"
                className="report-input"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            /><br></br>
            
            <select
                className="report-input"
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
            >
                <option value="" disabled>Select species</option>
                <option value="parrot">Parrot</option>
                <option value="crow">Crow</option>
                <option value="sparrow">Sparrow</option>
                <option value="pigeon">Pigeon</option>
                <option value="honeybee">Honeybee</option>
            </select><br></br>
            <button className="report-button" onClick={handleUpload}>Upload</button><br></br>
            <div className="report-images">
                {pictures.map((picture, index) => (
                    <img key={index} className="report-image" src={picture} alt={`Uploaded ${index + 1}`} />
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Report;
