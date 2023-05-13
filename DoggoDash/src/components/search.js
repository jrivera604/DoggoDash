import { useState, useEffect } from 'react';

export default function Search() {
  const [sitters, setSitters] = useState([]);

  useEffect(() => {
    async function fetchSitters() {
      const response = await fetch('/api/sitters');
      const data = await response.json();
      setSitters(data);
    }

    fetchSitters();
  }, []);

  return (
    <div>
      <h1>Sitters</h1>
      <ul>
        {sitters.map((sitter) => (
          <li key={sitter.id}>
            {sitter.firstname} {sitter.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}
