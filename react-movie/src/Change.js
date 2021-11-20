import { useState } from "react";
import { ColorBox } from './ColorBox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Change() {
  const [color, setcolor] = useState("");
  const [boxcolors, setboxcolor] = useState(["Red", "blue", "green"]);
  console.log(boxcolors);
  const styles = { borderColor: color };
  return (
    <div>
      <TextField style={styles} onChange={(event) => setcolor(event.target.value)} id="filled-basic" label="Enter the color" variant="filled" />
      <Button style={{marginLeft:"10px",padding:"15px"}} onClick={() => setboxcolor([...boxcolors, color])} variant="contained">Click</Button>
      {boxcolors.map((boxcolor, index) => (
        <ColorBox key={index} boxcolor={boxcolor} />
      ))}
    </div>
  );
}
