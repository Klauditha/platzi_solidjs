import styles from './App.module.css';
import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);
  return (
    <div class={styles.App}>
      <h1>Count: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </div>
  );
}

export default App;
