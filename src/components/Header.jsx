import PropTypes from 'prop-types'; // Add this line if using PropTypes
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

function Header({ headshot }) {
    return (
        <Container component="header" sx={{ my: 4, mx: 'auto' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={12} sm>
                    <Typography variant="h4" gutterBottom>
                        Clement Ou
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {'/\'klɛmənt \'oʊ/'} • 欧华 (Ōu Huá) • he/him
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Palo Alto, CA
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Link href="mailto:clement.h.ou@gmail.com" color="inherit">
                                <EmailIcon />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://www.linkedin.com/in/clementou" target="_blank" rel="noopener noreferrer" color="inherit">
                                <LinkedInIcon />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://github.com/clementou" target="_blank" rel="noopener noreferrer" color="inherit">
                                <GitHubIcon />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box sx={{
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={headshot} alt="Clement Ou Headshot" style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

// Add propTypes for type checking
Header.propTypes = {
    headshot: PropTypes.string.isRequired,
};

export default Header;