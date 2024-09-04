import { useEffect, useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`$${count}`);
  });

  return (
    <div>
      {count}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
