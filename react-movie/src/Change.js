import { useState } from "react";
import { ColorBox } from './ColorBox';

export function Change() {
  const [color, setcolor] = useState("");
  const [boxcolors, setboxcolor] = useState(["Red", "blue", "green"]);
  console.log(boxcolors);
  const styles = { backgroundColor: color };
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setcolor(event.target.value)}
        placeholder="Enter the color" />
      <button onClick={() => setboxcolor([...boxcolors, color])}>Click</button>
      {boxcolors.map((boxcolor, index) => (
        <ColorBox key={index} boxcolor={boxcolor} />
      ))}
    </div>
  );
}
