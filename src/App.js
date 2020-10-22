import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Speed Typing Game!</h1>
      </header>
      <main>
        <textarea name="" value="" onChange={() => console.log('I have been typed in!')} id="" />
        <h4>Time Remaining: ###</h4>
        <button>Start</button>
        <h1>Word Count: ###</h1>
      </main>
    </div>
  );
}

export default App;
 