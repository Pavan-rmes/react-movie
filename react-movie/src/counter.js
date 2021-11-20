import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="like-dislike">
      <IconButton 
      aria-label="delete" 
      size="large"
      onClick={() => setlike(like + 1)}
      color="primary">
      <Badge badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>

      <IconButton 
      aria-label="delete" 
      size="large"
      onClick={() => setdislike(dislike + 1)}
      color="error">
      <Badge badgeContent={dislike} color="error">
      👎
      </Badge>
      </IconButton>
    </div>
  );
}