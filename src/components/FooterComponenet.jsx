import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";


const FooterComponent = () => {
  return (
    <Box 
      component="footer" 
      className="footer-lumiere"
      sx={{
        marginLeft: { xs: 0, lg: "-35px" }, 
        width: "auto",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <div className="footer-inner">
          <div className="footer-monogram">
            <Typography className="footer-monogram" variant="h2" sx={{fontFamily:'Cormorant Garamond',fontSize:90 , marginTop:-3}}>
              L
            </Typography>
          </div>

            <Box className="footer-brand">
              <Typography variant="h5" component="h2" className="footer-title">
                Lumiere
              </Typography>
              <Typography variant="body2" className="footer-subtitle">
                Cinema Studio
              </Typography>
              <Typography variant="body2" className="footer-description">
                A private salon for those who believe a film deserves to be
                remembered.
              </Typography>
            </Box>
        


          
            <Box className="footer-nav">
              <Typography variant="overline" className="footer-label">
                Explore
              </Typography>
              
              <Stack direction="row" spacing={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link to="/">Home</Link>
                  <Link to="/favorites">Favorites</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link to="/movies/add">Add Movie</Link>
                  <Link to="/contact">Contact</Link>
                </Box>
              </Stack>
            </Box>
          </div>

        <Box className="footer-bottom-text">
          <Typography variant="caption" display="block">
            © 2026 Lumiere Cinema Studio. All rights reserved.
          </Typography>
          <Typography variant="caption" component="span" sx={{ fontStyle: 'italic' }}>
            Made for movie lovers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;