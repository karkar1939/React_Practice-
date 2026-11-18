import { Title, Subtitle, Paragraph, HighlightBox, StudentCard } from './components/CourseComponents.jsx';
import { Counter, CourseInfo, LivePreview } from './components/Interactive.jsx';
import { StudentDirectory } from './components/StudentList.jsx';
import { students } from './data/students.js';

function App() {
  return <div className="app"><header className="header"><a href="#home" className="brand">E<span>|</span>C <small>React Lab</small></a><nav aria-label="Main navigation"><a href="#about">Course</a><a href="#props">Props</a><a href="#state">State</a><a href="#students">Students</a></nav></header>
    <main id="home"><section className="hero"><span className="eyebrow">ENGINEERING COLLEGE · PRACTICE 5</span><h1>Introduction to React</h1><p>React is a JavaScript library for building user interfaces from reusable components. This project demonstrates JSX, props, state, events, and conditional rendering.</p><a className="cta" href="#about">Explore exercises ↓</a></section>
    <section id="about" className="section"><span className="section-label">5.3 & 5.4 · JSX AND COMPONENTS</span><Title>About This Course</Title><Subtitle>Build interfaces one component at a time</Subtitle><Paragraph>Components let us split a page into reusable pieces. JSX lets us describe the interface with HTML-like syntax inside JavaScript.</Paragraph><HighlightBox>Tip: Open <code>src/App.jsx</code> and edit the text. Vite updates your browser automatically.</HighlightBox></section>
    <section id="props" className="section"><span className="section-label">5.4 · PROPS PRACTICE</span><Title>Student Cards</Title><Paragraph>Each card uses the same StudentCard component with different props. The cards are rendered from an array with <code>.map()</code>.</Paragraph><div className="card-grid">{students.slice(0, 3).map(student => <StudentCard key={student.id} name={student.name} group={student.group} favoriteSubject={student.favoriteSubject}/>)}</div></section>
    <section id="state" className="section"><span className="section-label">5.5 · STATE AND INTERACTIVITY</span><Title>Interactive React</Title><Paragraph>These examples use the <code>useState</code> hook to update the interface after user actions.</Paragraph><div className="interactive-grid"><Counter/><CourseInfo/><LivePreview/></div></section>
    <section id="students" className="section"><span className="section-label">5.6 · MINI PROJECT</span><Title>E|C Student List</Title><Paragraph>Filter students by active status. The list updates immediately without reloading the page.</Paragraph><StudentDirectory students={students}/></section></main>
    <footer><span>E|C · Engineering College React Demo</span><span>© {new Date().getFullYear()} · Built with React + Vite</span></footer></div>;
}
export default App;
