import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("Hello");
  });

  return (
    <div>
      <p>You've clicked me {count} many times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
