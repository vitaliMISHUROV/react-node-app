
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <p>{!data ? "Loading..." : data}</p>
  );
}

export default App;
