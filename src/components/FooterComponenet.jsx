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
                Lumière
              </Typography>
              <Typography variant="body2" className="footer-subtitle">
                Cinéma · Atelier
              </Typography>
              <Typography variant="body2" className="footer-description">
                A private salon for those who believe a film deserves to be
                remembered.
              </Typography>
            </Box>
       

          
            <Box className="footer-nav">
              <Typography variant="overline" className="footer-label">
                Salon
              </Typography>
              
              <Stack direction="row" spacing={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link to="/">Atelier</Link>
                  <Link to="/favorites">Collection</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link to="/movies/add">Maison</Link>
                  <Link to="/contact">Correspondence</Link>
                </Box>
              </Stack>
            </Box>
          </div>

        <Box className="footer-bottom-text">
          <Typography variant="caption" display="block">
            © 2026 Lumière · Cinéma Atelier
          </Typography>
          <Typography variant="caption" component="span" sx={{ fontStyle: 'italic' }}>
            — Pour les cinéphiles
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;