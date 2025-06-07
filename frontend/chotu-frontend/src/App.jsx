import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((msg) => setData(msg))
      .catch((err) => console.error("Error fetching from backend:", err));
  }, []);

  return (
    <div>
      <h1>CHOTU Frontend</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
