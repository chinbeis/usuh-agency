import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px", fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#000" }}>
                Usuh Agency
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                        171/5, Borhanpur Lane, 6 Hazaribagh Road, Dhaka 1211
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
                                +880 1552-938771
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
                <Link href="https://www.facebook.com/usuh.agency">
                    <a target="_blank">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://twitter.com">
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
        </Box>
    );
};
export default FooterOne;