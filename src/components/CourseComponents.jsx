export function Title({ children }) { return <h2>{children}</h2>; }
export function Subtitle({ children }) { return <h3>{children}</h3>; }
export function Paragraph({ children }) { return <p>{children}</p>; }
export function HighlightBox({ children }) { return <div className="highlight-box">{children}</div>; }
export function StudentCard({ name, group, favoriteSubject }) {
  return <article className="student-card"><div className="avatar" aria-hidden="true">{name.charAt(0)}</div><h3>{name}</h3><p>Group: {group}</p><p>Favorite subject: {favoriteSubject}</p></article>;
}
