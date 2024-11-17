const Logo = () => {
    return (
        <Box
            sx={{
                mt: "2px",
                a: {
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "24px", 
                    fontWeight: "bold",
                },
            }}
        >
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >
                Usuh Agency
            </Link>
        </Box>
    );
};
export default Logo;
