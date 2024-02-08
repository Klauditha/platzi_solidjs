import styles from './App.module.css';
import { createSignal, createEffect } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  createEffect(() => {
    console.log('Count: ' + count());
    console.log('Count2: ' + count2());
  });

  createEffect(() => {
    localStorage.setItem('count', count());
  });
  return (
    <div class={styles.App}>
      <h1>Count: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
      <button onClick={() => setCount2(count2() + 1)}>{count2()}</button>
    </div>
  );
}

export default App;
