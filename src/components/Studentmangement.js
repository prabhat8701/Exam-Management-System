import React, { useState } from 'react';
import './stdmngpge.css'
export default function Studentmanagement() {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', grade: '10th', age: 16 },
        { id: 2, name: 'Jane Smith', grade: '11th', age: 17 },
        { id: 3, name: 'Alice Johnson', grade: '9th', age: 15 },

    ]);
    return (
        <div className="student-management-page">
            <h1>Student Enrollment and Management</h1>

            {/* Student List */}
            <div className="student-list" style={{ color: "black" }}>
                <h2>Student List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.grade}</td>
                                <td>{student.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Student Form (for enrollment) */}
            <div className="add-student-form">
                <h2>Add New Student</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grade">Grade:</label>
                        <input type="text" id="grade" name="grade" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" name="age" />
                    </div>
                    <button type="submit">Add Student</button>
                </form>
            </div>
        </div>
    )
}
