import { AppBar, Button, styled, Toolbar } from "@mui/material";
import { LinkedIn, GitHub, WhatsApp } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
}));

const StyledAppBar = styled(AppBar)(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
}));

const whatsappNumber = "61994419678";  // Número de telefone no formato internacional

const NavBar = () => {
    return (
        <StyledAppBar>
            <StyledToolbar>
                <Button 
                    color="inherit" 
                    startIcon={<LinkedIn sx={{ color: "#0077B5" }} />} // Cor do LinkedIn
                    href="https://www.linkedin.com/in/danillo-dias-072338116/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </Button>
                <Button 
                    color="inherit" 
                    startIcon={<GitHub sx={{ color: "#6e6e6e" }} />} // Cor do GitHub
                    href="https://github.com/DanilloDLima" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    GitHub
                </Button>
                <Button 
                    color="inherit" 
                    startIcon={<WhatsApp sx={{ color: "#25D366" }} />} // Cor do WhatsApp
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    WhatsApp
                </Button>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default NavBar;
