import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="form-container">
      <h1>Admission Form</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />

        <label htmlFor="prevSchool">Previous School Name:</label>
        <input type="text" id="prevSchool" name="prevSchool" />

        <label htmlFor="tcId">Transfer Certificate ID:</label>
        <input type="text" id="tcId" name="tcId" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
