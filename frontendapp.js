// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = async () => {
    const res = await fetch('http://localhost:5000/api/bmi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weight: parseFloat(weight), height: parseFloat(height) })
    });
    const data = await res.json();
    setBmi(data.bmi);
  };

  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(e.target.value)} />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <h3>Your BMI is {bmi}</h3>}
    </div>
  );
}

export default App;
