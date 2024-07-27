import React, { useState } from 'react';
import './Offexm.css'; // Import CSS file for styling

const Offexm = () => {
    // State variables for exam details
    const [examName, setExamName] = useState('');
    const [examFile, setExamFile] = useState(null);
    const [isExamSubmitted, setIsExamSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setExamFile(file);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Simulate exam submission (could be replaced with actual API call)
            console.log('Submitting exam:', examName);
            console.log('Exam file:', examFile);
            // Simulate submission delay (2 seconds)
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsExamSubmitted(true);
            setExamName('');
            setExamFile(null);
            setError('');
        } catch (error) {
            setError('An error occurred while submitting the exam.');
        }
    };

    return (
        <div className="offline-exam-support">
            <h1>Offline Exam Support</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Exam Name:</label>
                    <input
                        type="text"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload Exam File:</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {isExamSubmitted && <div className="success-message">Exam submitted successfully!</div>}
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default Offexm;
