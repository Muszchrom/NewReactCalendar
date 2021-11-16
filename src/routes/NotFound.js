import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(props) {
  useEffect(() => {
     props.setDayName(props.title);
  })

  return (
    <div style={{textAlign: "center"}}>
      <h1>404 ERR</h1>
      <Link to="/monday" style={{textDecoration: "underline"}}>
        Get me back to monday!
      </Link>
    </div>
  );
}
