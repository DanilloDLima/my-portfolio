import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar3.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import { Html, Css, Javascript, GitHub } from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faBootstrap, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import PowerBIIcon from '../../../../assets/images/power-bi.png'; // Importar o ícone

// Estilos para o Footer
const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    width: '100%',
    boxSizing: 'border-box',
}));

const IconContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}));

const IconWithCaption = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "calc(100vh - 163px)", // Ajuste para a altura total disponível
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            paddingTop: "50px",
            paddingBottom: "50px",
            minHeight: "auto", // Permitir que o conteúdo defina a altura em dispositivos menores
        },
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.down('sm')]: {
            width: "60%", // Reduzir o tamanho da imagem em dispositivos menores
        },
    }));

    // Função para lidar com o clique do botão "Contact me"
    const handleContactClick = () => {
        const email = "danillodiasdlima@gmail.com";
        const subject = "Contato";
        const body = "Olá, gostaria de entrar em contato para discutir mais sobre oportunidades e colaborações.";

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoLink, '_blank');
    };

    // Configuração da animação para o texto
    const textAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 3 } },
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box position={"relative"}>
                                <Box position={"absolute"} width={"100%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImg src={Avatar} alt="Danillo Dias de Lima" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                                Danillo Dias de Lima
                            </Typography>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={textAnimation}
                            >
                                <Typography color={alpha("#FFFFFF", 0.7)} variant="h3" textAlign="center">
                                    I am a programming student
                                </Typography>
                            </motion.div>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <a href="/assets/documents/Danillo-Dias-de-Lima-Curriculo.pdf" download="Danillo-Dias-de-Lima-Curriculo.pdf" style={{ textDecoration: "none" }}>
                                        <StyledButton aria-label="Download CV" onClick={() => console.log("")}  >
                                            <DownloadIcon />
                                            <Typography ml={1}>
                                                Download CV
                                            </Typography>
                                        </StyledButton>
                                    </a>
                                </Grid>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={handleContactClick} aria-label="Contact me">
                                        <EmailIcon />
                                        <Typography ml={1}>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
            {/* Footer */}
            <FooterContainer>
                <Container maxWidth="lg">
                    <Typography variant="h6" gutterBottom>
                        Skills & Tools
                    </Typography>
                    <Grid container spacing={2} justifyContent="space-evenly">
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <Html fontSize="large" style={{ color: "#E34F26", marginRight: '8px' }} />
                                    <Typography variant="caption">HTML5</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <Css fontSize="large" style={{ color: "#1572B6", marginRight: '8px' }} />
                                    <Typography variant="caption">CSS3</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <Javascript fontSize="large" style={{ color: "#F7DF1E", marginRight: '8px' }} />
                                    <Typography variant="caption">JavaScript</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <FontAwesomeIcon icon={faBootstrap} size="2x" color="#7952B3" style={{ marginRight: '8px' }} />
                                    <Typography variant="caption">Bootstrap</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <FontAwesomeIcon icon={faNodeJs} size="2x" color="#339933" style={{ marginRight: '8px' }} />
                                    <Typography variant="caption">Node.js</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <FontAwesomeIcon icon={faJava} size="2x" color="#007396" style={{ marginRight: '8px' }} />
                                    <Typography variant="caption">Java</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <FontAwesomeIcon icon={faPython} size="2x" color="#3776AB" style={{ marginRight: '8px' }} />
                                    <Typography variant="caption">Python</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <GitHub fontSize="large" style={{ color: "#6e6e6e", marginRight: '8px' }} />
                                    <Typography variant="caption">Git</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <img src={PowerBIIcon} alt="Power BI" style={{ width: '40px', height: 'auto', marginRight: '8px' }} />
                                    <Typography variant="caption">Power BI</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                        <Grid item>
                            <IconContainer>
                                <IconWithCaption>
                                    <FontAwesomeIcon icon={faBrain} size="2x" color="#FF4500" style={{ marginRight: '8px' }} />
                                    <Typography variant="caption">AI-900</Typography>
                                </IconWithCaption>
                            </IconContainer>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" mt={2}>
                        &copy; {new Date().getFullYear()} Danillo Dias de Lima
                    </Typography>
                </Container>
            </FooterContainer>
        </>
    );
}

export default Hero;
