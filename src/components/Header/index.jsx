import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';
import './styles.scss';

Header.propTypes = {

};

function Header(props) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">Hùng Sùi</Link>
                    </Typography>
                    <NavLink to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    <Button color="inherit" onClick={handleClickOpen}>Đăng ký</Button>
                </Toolbar>
            </AppBar>

            <Dialog
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <Register closeDialog={handleClose} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>


    );
}

export default Header;