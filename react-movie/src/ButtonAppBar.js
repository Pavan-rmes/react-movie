import { useState } from "react";
import { useHistory} from "react-router";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export function ButtonAppBar() {
  const [click, setclick] = useState(false);
  const history = useHistory();
  let styleMenu;
  let styleClose;
  let stylesHome;
  let styles;

  function menuClick() {
    setclick(!click);
  }
  if (click === true) {
    styleMenu = { display: "none" };
    styleClose = { display: "block" };
    stylesHome = { display: "none" };
    styles = { display: "flex" };
  }

  function closeClick() {
    setclick(!click);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="menu-close" style={styleClose}>
          <CloseIcon onClick={() => closeClick()} />
        </div>
        <Toolbar>
          <div className="appdrawer">
            <IconButton
              onClick={() => menuClick()}
              style={styleMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="appbar-hidden" style={stylesHome}>
            <Button color="inherit">
              <Typography variant="h6">
                Home
              </Typography>
            </Button>
          </div>
          <div style={styles} className="appbar">
            <Button onClick={()=>history.push("/")} color="inherit">
              <Typography variant="h6">
                Home
              </Typography>
            </Button>
            <Button onClick={()=>history.push("/movies")} color="inherit">
              <Typography variant="h6">
                MOVIES
              </Typography>
            </Button>
            <Button onClick={()=>history.push("/color")} color="inherit">
              <Typography variant="h6">
                COLOR GAME
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ paddingLeft: "4%" }}>

      </div>
    </Box>
  );
}
