import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard'; // Import Dashboard component
import FilterQuestions from './components/FilterQuestions';
import UserList from './components/UserList';
import './App.css'; // Import custom CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard /> {/* Include the Dashboard component here */}
        
       
              <Routes>
                <Route path="/questions" element={<FilterQuestions />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/" element={<h3 className="text-center">Welcome to the Admin Panel!</h3>} />
              </Routes>
           
      </div>
    </Router>
  );
}

export default App;
