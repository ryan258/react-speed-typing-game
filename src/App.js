import React, {useState} from 'react';

function App() {
  const [ text, setText ] = useState("boo!")

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  console.log(text)

  return (
    <div>
      <header>
        <h1>Speed Typing Game!</h1>
      </header>
      <main>
        <textarea name="" value={text} onChange={handleChange} id="" />
        <h4>Time Remaining: ###</h4>
        <button>Start</button>
        <h1>Word Count: ###</h1>
      </main>
    </div>
  );
}

export default App;
 