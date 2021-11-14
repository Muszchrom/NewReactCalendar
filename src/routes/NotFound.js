import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>404 ERR</h1>
      <Link to="/monday" style={{textDecoration: "underline"}}>
        Get me back to monday!
      </Link>
    </div>
  );
}
