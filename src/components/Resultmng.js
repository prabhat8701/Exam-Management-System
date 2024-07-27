import React, { useState } from 'react';
import './Resultmng.css'
export default function Resultmng() {
  const [results, setResults] = useState([
    { id: 1, studentName: 'John Doe', course: 'Mathematics', score: 85 },
    { id: 2, studentName: 'Alice Smith', course: 'English Literature', score: 72 },
    // Add more result data as needed
  ]);
  // Sorting state
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  // Filtering state
  const [filterByCourse, setFilterByCourse] = useState('');
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5; // Number of results to display per page

  // Sorting function
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };
  // Filtering function
  const handleFilter = (e) => {
    setFilterByCourse(e.target.value);
  };
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div className="result-management-page">
      <h2>Result Management</h2>
      <div className="filters">
        <label htmlFor="course">Filter by Course:</label>
        <input
          type="text"
          id="course"
          value={filterByCourse}
          onChange={handleFilter}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('studentName')}>Student Name</th>
            <th onClick={() => handleSort('course')}>Course</th>
            <th onClick={() => handleSort('score')}>Score</th>
          </tr>
        </thead>
        <tbody>
          {currentResults
            .filter((result) =>
              filterByCourse ? result.course.includes(filterByCourse) : true
            )
            .sort((a, b) => {
              if (sortBy) {
                const comparison = a[sortBy].localeCompare(b[sortBy]);
                return sortOrder === 'asc' ? comparison : -comparison;
              }
              return 0;
            })
            .map((result) => (
              <tr key={result.id}>
                <td>{result.studentName}</td>
                <td>{result.course}</td>
                <td>{result.score}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}
