import { useState } from 'react';
import './App.css';
import info from './data';
import { nanoid } from 'nanoid';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(info.slice(0, amount));
    console.log(text);
  };
  const id = nanoid();
  console.log(id);

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          value={count}
          max="8"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
