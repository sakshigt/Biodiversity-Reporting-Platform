import React, { useState, useEffect } from 'react';
import './home.css'; // Import CSS file for styling
import SparrowImage from './sparrow.jpg';
import ParrotImage from './parrots.jpg';
import CrowImage from './crow.jpg';
import HoneybeeImage from './honeybees.jpg';
import PigeonImage from './pigeons.jpg';

const BioDiversity = () => {
  const [speciesDetails, setSpeciesDetails] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const speciesData = [
    { name: "Sparrow", description: "Habitat loss: Urbanization, pollution, and changes in agriculture are destroying sparrow nesting areas and food sources." },
    { name: "Parrot", description: "Parrots face a triple threat: habitat loss from deforestation for agriculture and development, dwindling wild populations due to capture for the illegal pet trade, and potential health problems and breeding difficulties in captivity with improper care." },
    { name: "Crow", description: "Habitat loss: Similar to sparrows, crows face challenges due to urbanization, pollution, and land-use changes that remove their nesting and feeding grounds." },
    { name: "Honeybee", description: "The destruction of natural habitats and the use of pesticides are crippling honeybees. Disappearing wildflowers due to deforestation and development leave them with dwindling food sources, while pesticides can directly kill bees or weaken them, harming their colonies' health and survival." },
    { name: "Pigeon", description: "Cities are tough on pigeons. Modern buildings offer few nesting sites, and pollution harms their food. This decline disrupts their seed dispersal also the radiations produced by cell towers are rapidly affecting there Genes which might lead to unpredictable outcome." },
  ];

  const questionsData = [
    { question: "What is the main threat to sparrows?", options: ["Urbanization", "Deforestation", "Hunting"], correct: "Urbanization" },
    { question: "Why are parrots facing extinction?", options: ["Illegal pet trade", "Climate change", "Overfishing"], correct: "Illegal pet trade" },
    { question: "What challenge do crows share with sparrows?", options: ["Urbanization", "Pesticides", "Deforestation"], correct: "Urbanization" },
    { question: "What is harming honeybees?", options: ["Pesticides", "Overfishing", "Urbanization"], correct: "Pesticides" },
    { question: "Why are pigeons declining in cities?", options: ["Lack of nesting sites", "Overfishing", "Illegal pet trade"], correct: "Lack of nesting sites" },
    { question: "Which species is affected by cell tower radiation?", options: ["Pigeon", "Sparrow", "Crow"], correct: "Pigeon" },
    { question: "What is a common issue among all the species?", options: ["Habitat loss", "Overfishing", "Climate change"], correct: "Habitat loss" },
    
  ];

  useEffect(() => {
    setTimeout(() => {
      setSpeciesDetails(speciesData);
    }, 1000);
  }, []);

  const handleAnswerChange = (questionIndex, option) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questionsData.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleTryAgain = () => {
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="bio-diversity-container">
      <div className="content-box">
        <div className="species-box-container">
          {speciesDetails.map((species, index) => (
            <div key={index} className="species-box">
              <h2>{species.name}</h2>
              <p>{species.description}</p>
              <img
                src={getImage(species.name)}
                alt={species.name}
                className="species-image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="questionnaire-box">
        <h2>Fun Quiz</h2>
        {questionsData.map((question, index) => (
          <div key={index} className="question-box">
            <p>{question.question}</p>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="option-label">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                  disabled={submitted}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        {!submitted && <button onClick={handleSubmit}>Submit</button>}
        {submitted && (
          <div className="result-box">
            <h3>Results</h3>
            <p>Your Score: {score} / {questionsData.length}</p>
            <p>Review:</p>
            {questionsData.map((question, index) => (
              <div key={index} className="review-box">
                <p>{question.question}</p>
                <p>Your Answer: {userAnswers[index]}</p>
                <p>Correct Answer: {question.correct}</p>
              </div>
            ))}
            <button onClick={handleTryAgain}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

const getImage = (speciesName) => {
  switch (speciesName) {
    case 'Sparrow':
      return SparrowImage;
    case 'Parrot':
      return ParrotImage;
    case 'Crow':
      return CrowImage;
    case 'Honeybee':
      return HoneybeeImage;
    case 'Pigeon':
      return PigeonImage;
    default:
      return '';
  }
};

export default BioDiversity;
