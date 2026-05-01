import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>

      {projects.map((p, index) => (
        <div key={index}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;