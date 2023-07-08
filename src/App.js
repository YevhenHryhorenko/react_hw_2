import React, { useState } from 'react';
import './App.css';

function App() {
  const [smileys, setSmileys] = useState([
    { id: 1, emoji: "😊", count: 0 },
    { id: 2, emoji: "😃", count: 0 },
    { id: 3, emoji: "😄", count: 0 },
    { id: 4, emoji: "😁", count: 0 },
    { id: 5, emoji: "😆", count: 0 },
    { id: 6, emoji: "😍", count: 0 },
    { id: 7, emoji: "🥰", count: 0 },
    { id: 8, emoji: "😘", count: 0 },
    { id: 9, emoji: "😚", count: 0 },
    { id: 10, emoji: "😉", count: 0 },
    { id: 11, emoji: "😜", count: 0 },
    { id: 12, emoji: "😝", count: 0 },
    { id: 13, emoji: "😛", count: 0 },
    { id: 14, emoji: "🤪", count: 0 },
    { id: 15, emoji: "😎", count: 0 },
    { id: 16, emoji: "🤩", count: 0 },
    { id: 17, emoji: "🥳", count: 0 },
    { id: 18, emoji: "🤗", count: 0 },
    { id: 19, emoji: "🙃", count: 0 },
    { id: 20, emoji: "😇", count: 0 },
  ]);
  
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    const updatedSmileys = smileys.map(smiley => {
      if (smiley.id === id) {
        return { ...smiley, count: smiley.count + 1 };
      }
      return smiley;
    });
    setSmileys(updatedSmileys);
  };

  const handleShowResult = () => {
    const maxCount = Math.max(...smileys.map(smiley => smiley.count));
    const winningSmileys = smileys.filter(smiley => Math.abs(smiley.count - maxCount) < Number.EPSILON);

    if (winningSmileys.length === 1) {
      setWinner(winningSmileys[0]);
    } else {
      setWinner(null);
    }

    setShowResult(true);
  };

  return (
    <div className='wrapper'>
      <h2>Smiley List</h2>
      <div className='smiles-grid'>
        {smileys.map(smiley => (
          <div key={smiley.id}>
            <span className='smile' onClick={() => handleVote(smiley.id)}>{smiley.emoji}</span>
          </div>
        ))}
      </div>
      <button className='button' onClick={handleShowResult}>Show Results</button>
      {showResult && (
        <div>
          {winner ? (
            <div>
              <h3>Winner:</h3>
              <span className='smile'>{winner.emoji}</span>
            </div>
          ) : (
            <div>
              <span className='no-winner'>No clear winner. Let the competition continue!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
