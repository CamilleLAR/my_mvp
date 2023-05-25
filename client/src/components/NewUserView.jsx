import React, { useEffect, useState } from "react";
import { components } from "react-select";
import Select from 'react-select'

function UserView() {
  const [quiz, setQuiz] = useState({ question: "", answers: [] });
  const [selectedValues, setSelectedValues] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    showQuestionnaire(1);
  }, []);

  const showQuestionnaire = id => {
    fetch(`/api/questions/${id}/answers`)
    .then(response => response.json())
    .then(data => {
      setQuiz(data);
    })
    . catch(error => {
    console.log(error)
    });
  };

  const handleSelect = (answer) => {
    if (selectedValues.includes(answer)) {
      setSelectedValues(selectedValues.filter(value => value !== answer));
    } else {
      setSelectedValues([...selectedValues, answer]);
    }
    setIsSelected(!isSelected);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    if (selectedValues.length === 0) {
      alert("Please select an answer.");
      return;
    }
    if (quiz.id === totalQuestions) {
      alert(`Your concerns are ${selectedValues}.`);
      setSelectedValues([]);
      showQuestionnaire(1);
    }
    if (quiz.id < totalQuestions) {
      showQuestionnaire((quiz.id) + 1);
    }
  };

  const { id, question, answers } = quiz;
  const totalQuestions = 5;

  return (
    <div>
        <h2>New here?</h2>
        <h3>Skin assessment</h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <h4>
              {id}. {question}
            </h4>
            <ul>
              {answers.map((answer, index) => (
                <li key={answers[index]}>
                  <button 
                      type="button"
                      className={selectedValues.includes(answer) ? "selected" : ""} 
                      onClick={() => handleSelect(answer)}
                  >{answer}</button>
                </li>
              ))}
            </ul>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h4>Your answers are:</h4>
          {selectedValues.map((value, index) => (
                <p key={index}>{value}</p>
              ))}
        </div>
    </div>
  );
}


export default UserView;