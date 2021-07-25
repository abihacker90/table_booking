import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';


export default function Hammenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className="Menuicon" width={1.5} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
             width: '30vw',
            background: 'rgba(219, 162, 74, 0.7)',


          }
        }}
       
      >
        <MenuItem onClick={handleClose}><Link href="#menu">Menu</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/reservations">Book a table</Link></MenuItem>
      </Menu>
    </div>
  );
}