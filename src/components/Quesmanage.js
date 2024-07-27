import React, { useState } from 'react';
import './Quesmanage.css'
export default function Quesmanage() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [questions, setQuestions] = useState([]);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new question object
        const newQuestion = {
            id: Date.now(),
            question: question,
            answer: answer
        };
        // Add the new question to the questions array
        setQuestions([...questions, newQuestion]);
        // Reset form fields
        setQuestion('');
        setAnswer('');
    };

    // Function to handle question deletion
    const handleDelete = (id) => {
        const updatedQuestions = questions.filter((question) => question.id !== id);
        setQuestions(updatedQuestions);
    };
    return (
        <div className="question-bank-management">
            <h1>Question Bank Management</h1>
            <form onSubmit={handleSubmit} className="question-form">
                <div>
                    <label>Question:</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Answer:</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Question</button>
            </form>
            <div className="question-list">
                <h2>Question List</h2>
                <ul>
                    {questions.map((q) => (
                        <li key={q.id}>
                            <div className="question">{q.question}</div>
                            <div className="answer">{q.answer}</div>
                            <button onClick={() => handleDelete(q.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
