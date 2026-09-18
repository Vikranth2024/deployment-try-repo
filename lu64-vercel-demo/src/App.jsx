import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!API_URL) {
      setStatus("VITE_API_URL is not set");
      return;
    }

    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(`API says: ${JSON.stringify(data)}`))
      .catch(() => setStatus("Could not reach the API"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Vercel Deploy Demo</h1>
  
    </div>
  );
}
