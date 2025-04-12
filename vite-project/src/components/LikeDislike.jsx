import { useState } from 'react';

function LikeDislike() {
  const [score, setScore] = useState(0);

  const handleLike = () => {
    setScore(prev => prev + 1);
  };

  const handleDislike = () => {
    setScore(prev => prev - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>ქულა: {score}</h2>
      <button onClick={handleLike} style={{ marginRight: '1rem' }}>👍 Like</button>
      <button onClick={handleDislike}>👎 Dislike</button>
    </div>
  );
}

export default LikeDislike;
