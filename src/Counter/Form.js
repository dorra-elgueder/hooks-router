import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("no name");
  const handlename = (event) => setname(event.target.value);
  return (
    <div>
      <input type="text" onChange={handlename} />
      <h3>{name}</h3>
    </div>
  );
};

export default Form;
