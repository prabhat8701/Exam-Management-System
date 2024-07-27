import React, { useState, useEffect } from 'react';
import './Realtimemon.css'
export default function Realtimemon() {
    const [students, setStudents] = useState([]);
    const [examStatus, setExamStatus] = useState('Not Started');

    // Simulate fetching live data (useEffect with setInterval)
    useEffect(() => {
        const fetchData = () => {
            // Simulate fetching student data
            const studentData = [
                { id: 1, name: 'Student 1', progress: 25 },
                { id: 2, name: 'Student 2', progress: 50 },
                { id: 3, name: 'Student 3', progress: 75 },
                // Add more student data as needed
            ];
            setStudents(studentData);

            // Simulate fetching exam status
            const examStatusData = 'In Progress'; // Example exam status
            setExamStatus(examStatusData);
        };

        const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="real-time-monitoring">
            <h1>Real-Time Monitoring</h1>
            <div className="exam-status">Exam Status: {examStatus}</div>
            <div className="student-list">
                <h2>Student Progress</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Progress (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.progress}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
