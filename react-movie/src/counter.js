import { useState } from "react";

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="like-dislike">
      <button onClick={() => setlike(like + 1)}>👍 {like}</button>
      <button onClick={() => setdislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}