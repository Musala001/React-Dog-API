
import './App.css'

import { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Failed to fetch dog image:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>🐶 Random Dog Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A random dog" style={{ maxWidth: '500px', height: 'auto' }} />
      )}
      <br />
      <button onClick={fetchDogImage} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Fetch New Dog
      </button>
    </div>
  );
}

export default App;
