import { useState } from "react";
import Form from "./Form.jsx";
import Accepted from "./content/accepted.jsx";
import Rejected from "./content/rejected.jsx";

function App() {
  const [result, setResult] = useState({
    mode: null,
  });

  return (
    <div className="relative min-h-screen">
      {!result.mode ? (
        <Form setData={setResult} />
      ) : result.mode == "accepted" ? (
        <Accepted data={result} />
      ) : result.mode == "rejected" ? (
        <Rejected data={result} />
      ) : null}
      <button
        className="px-2 py-1 bg-slate-100 active:bg-white hover:bg-white ring-black ring-1 text-black m-2 text-right rounded-md mr-auto absolute z-10 bottom-2 right-2"
        onClick={() => setResult({ ...result, mode: null })}
      >
        &#10227;
      </button>
    </div>
  );
}

export default App;
