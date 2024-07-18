import React from "react";
import "./about.css";
import sparrow from "./sparrow.jpg";
import crow from "./crow.jpg";
import pigeon from "./pigeons.jpg";
import peacock from "./peacock.jpg";
import tiger from "./tiger.jpg";
import elephant from "./elephant.jpg";
import honeybees from "./honeybees.jpg";
import parrots from "./parrots.jpg";

const About = () => {
    // Arrays containing image paths for left and right sides
    const leftImages = [sparrow, crow, pigeon, peacock, tiger, elephant, honeybees, parrots];
    const rightImages = [crow, pigeon, peacock, tiger, elephant, honeybees, parrots, sparrow];

    // Shuffle function to randomize array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Randomize the images arrays for left and right sides
    const shuffledLeftImages = shuffleArray(leftImages);
    const shuffledRightImages = shuffleArray(rightImages);

    return (
        <div className="about-container">
            <h1>
                Welcome to our Website Biodiversity Management and Reporting Platform
                (BMRP). It's like a helpful tool that's designed to make it easier for
                everyone to do their part in protecting nature. With the help of our
                application, we can report problems we see in the environment, like
                animals in danger or habitat destruction, and quickly get help from the
                right people. It's all about coming together to make a positive
                difference for our planet.
            </h1>
            <div className="image-container left">
                {/* Map over shuffledLeftImages array to render images */}
                {shuffledLeftImages.map((image, index) => (
                    <img key={index} src={image} alt={`Left Image ${index}`} />
                ))}
            </div>
            <div className="image-container right">
                {/* Map over shuffledRightImages array to render images */}
                {shuffledRightImages.map((image, index) => (
                    <img key={index} src={image} alt={`Right Image ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default About;
