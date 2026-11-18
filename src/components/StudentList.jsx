import { useState } from 'react';
export function StudentFilter({ filter, onChange }) {
  return <div className="filters" role="group" aria-label="Student status filter"><button className={filter === 'all' ? 'selected' : ''} aria-pressed={filter === 'all'} onClick={() => onChange('all')}>All</button><button className={filter === 'active' ? 'selected' : ''} aria-pressed={filter === 'active'} onClick={() => onChange('active')}>Active only</button></div>;
}
export function StudentList({ students }) {
  return <div className="list">{students.length === 0 ? <p>No students found.</p> : students.map(student => <article className="list-item" key={student.id}><div><strong>{student.name}</strong><p>{student.track} · {student.group}</p></div><span className={student.isActive ? 'badge active' : 'badge'}>{student.isActive ? 'Active' : 'Inactive'}</span></article>)}</div>;
}
export function StudentDirectory({ students }) {
  const [filter, setFilter] = useState('all');
  const visibleStudents = filter === 'active' ? students.filter(student => student.isActive) : students;
  return <div className="directory"><div className="directory-top"><p>Showing {visibleStudents.length} of {students.length} students</p><StudentFilter filter={filter} onChange={setFilter}/></div><StudentList students={visibleStudents}/></div>;
}
