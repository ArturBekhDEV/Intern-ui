import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const inc = () => {
    setState((prev) => prev + 1);
  };
  return (
    <>
      <button data-testid="test-title" style={{ color: "green" }} onClick={inc}>
        increase
      </button>
      {state}
    </>
  );
}

export default App;
