import React, { useState } from "react";

const Conteur = () => {
  const [Count, setcount] = useState(0);
  const increment = () => setcount(Count + 1);
  const decrement = () => setcount(Count - 1);
  return (
    <div>
      <button onClick={increment}> +</button>
      <h3>{Count}</h3>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Conteur;
