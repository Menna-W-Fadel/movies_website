import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.terms) {
      alert("You must accept terms");
      return;
    }

    console.log(form);
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-gradient"></div>
      <main className="auth-container">
        <Paper className="auth-card" elevation={8}>
          <div className="auth-header">
            <Typography
              className="auth-label"
              variant="body2"
              sx={{ fontSize: 12 }}
            >
              By Invitation
            </Typography>
            <Typography
              component="h3"
              className="heading-hero"
              sx={{ fontSize: { xs: 25, sm: 30 }, fontWeight: "bold" }}
            >
              Reserve your seat
            </Typography>
            <Box
              className="divider-emerald"
              sx={{
                width: { xs: "100%", sm: 320 },
                margin: "0 auto",
              }}
            ></Box>
          </div>

          {/* form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                name="name"
                onChange={handleChange}
                value={form.name}
                fullWidth
                className="mui-input"
              />

              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                value={form.email}
                fullWidth
                className="mui-input"
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                fullWidth
                className="mui-input"
              />

              <FormControl fullWidth className="mui-input">
                <TextField
                  select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  label="Country"
                >
                  <MenuItem value="egypt">Egypt</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                </TextField>
              </FormControl>

              <FormControl>
                <Typography className="auth-sub-label">Gender</Typography>
                <RadioGroup
                  row
                  name="gender"
                  onChange={handleChange}
                  value={form.gender}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio className="mui-radio" />}
                    label="Male"
                    sx={{ color: "#bdcfdb" }}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio className="mui-radio" />}
                    label="Female"
                    sx={{ color: "#bdcfdb" }}
                  />
                </RadioGroup>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    onChange={handleChange}
                    checked={form.terms}
                    className="mui-checkbox"
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#bdcfdb" }}>
                    Accept Terms
                  </Typography>
                }
              />

              <Button
                className="btn-primary"
                fullWidth
                sx={{ color: "black", fontWeight: 500 }}
                type="submit"
              >
                <Typography sx={{fontSize:{xs:10,sm:15}}}>Request Invitation</Typography>
              </Button>
            </Stack>

            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography
                className="auth-footer"
                sx={{
                  display: "block",
                  marginTop: 3,
                  fontSize: 15,
                }}
              >
                Already a member?
                <span className="auth-footer-span-text"> Enter the lounge</span>
              </Typography>
            </Link>
          </Box>
        </Paper>
      </main>
    </div>
  );
};

export default RegisterComponent;
