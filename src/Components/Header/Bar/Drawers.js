import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                            <Box
                    sx={{
                        flex: 1,
                        mt: "5px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#000",
                    }}
                >
                    Usuh Agency
                </Box>
                <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
                    <CloseRoundedIcon />
                </ButtonBase>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.Description}>
                We are Usuh Agency, a group of people passionate about solving problems with the power of code. We have more than 4+ professional experience in different domains and clients. Our problem-solving skills help us to create a great product for you. We are always available to help your dream projects come true.
            </Typography>
            <Box sx={styles.Navs}>
                {Navs &&
                    Navs.map((nav, i) => (
                        <Scroll
                            key={i}
                            activeClass='active'
                            to={nav.Id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={toggleDrawer(false)}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </Scroll>
                    ))
                }
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                        Regis Place
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:info@usuh.agency">
                        <a>
                            <Typography variant="body1" component="p">
                                info@usuh.agency
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+8801552938771">
                        <a>
                            <Typography variant="body1" component="p">
                                89395630
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://github.com/chinbeis">
                    <a target="_blank">
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://www.facebook.com/.agency">
                    <a target="_blank">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://twitter.com/">
                    <a target="_blank">
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://behance.com">
                    <a target="_blank">
                        <ButtonBase>
                            <BehaceIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box >
    );
};
export default Drawers;