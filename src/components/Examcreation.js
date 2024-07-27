import React, { useState } from 'react';
import './Examcreat.css'
import footersection from './Footer'
export default function Examcreation() {
    const [examData, setExamData] = useState({
        title: '',
        questions: [],
        format: 'multiple-choice',
        duration: 60,
        instructions: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setExamData({
            ...examData,
            [name]: value
        });
    };
    const addQuestion = () => {

    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className="exam-creation-page">
            <h1>Create Exam</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Exam Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={examData.title}
                    onChange={handleChange}
                    required
                /><br></br>

                <label htmlFor="format">Format:</label>
                <select
                    id="format"
                    name="format"
                    value={examData.format}
                    onChange={handleChange} className='labformt'
                >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    {/* Add more options for different question formats */}
                </select>

                <label htmlFor="duration">Duration (minutes):</label>
                <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={examData.duration}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="instructions">Instructions:</label>
                <textarea className='labinstruct'
                    id="instructions"
                    name="instructions"
                    value={examData.instructions}
                    onChange={handleChange}
                />

                {/* Implement logic to display and add questions */}
                {/* Implement logic to display selected questions */}

                <button type="submit">Create Exam</button>
            </form>
            <footersection />
        </div>
    )
}
