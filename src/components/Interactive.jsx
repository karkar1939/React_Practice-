import { useState } from 'react';
export function Counter() {
  const [count, setCount] = useState(0);
  return <div className="panel"><h3>Counter</h3><div className="counter"><button onClick={() => setCount(c => c - 1)} aria-label="Decrease">−</button><output aria-live="polite">{count}</output><button onClick={() => setCount(c => c + 1)} aria-label="Increase">+</button></div></div>;
}
export function CourseInfo() {
  const [showDetails, setShowDetails] = useState(false);
  return <div className="panel"><h3>Course Info</h3><p>Introduction to React</p><button onClick={() => setShowDetails(v => !v)} aria-expanded={showDetails}>{showDetails ? 'Hide details' : 'Show details'}</button>{showDetails && <p className="detail">Learn JSX, reusable components, props, state, and events by building interactive interfaces.</p>}</div>;
}
export function LivePreview() {
  const [text, setText] = useState('');
  return <div className="panel"><h3>Live Preview</h3><label htmlFor="live-text">Type something</label><input id="live-text" value={text} onChange={e => setText(e.target.value)} placeholder="Write here..."/><p aria-live="polite">You typed: <strong>{text || '...'}</strong></p></div>;
}
