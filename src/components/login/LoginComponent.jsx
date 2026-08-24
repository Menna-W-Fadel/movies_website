import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Box,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.email.trim();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address (e.g. name@example.com).");
      return;
    }
    if (!form.password) {
      setError("Please enter your password.");
      return;
    }
    if (form.password.length < 6) {
      setError("Your password must be at least 6 characters long.");
      return;
    }

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-gradient"></div>

      <main className="auth-container">
        <Paper className="auth-card" elevation={8}>
          <div className="auth-header">
            <Typography className="auth-label" sx={{ fontSize: 12 }}>
              Members' Lounge
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              className="heading-hero"
              sx={{ fontSize: { xs: 25, sm: 30 }, fontWeight: "bold" }}
            >
              Welcome Back
            </Typography>

            <Box
              className="divider-emerald"
              sx={{
                width: { xs: "100%", sm: 400 },
                maxWidth: "100%",
                margin: "0 auto",
              }}
            ></Box>
          </div>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {error && <Alert severity="error">{error}</Alert>}

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

              <Button
                type="submit"
                className="btn-primary"
                fullWidth
                sx={{ color: "black", fontWeight: 500 }}
              >
                <Typography sx={{fontSize:{xs:10,sm:15}}}>Enter the Lounge</Typography>
              </Button>
            </Stack>
          </Box>
          <Link to="/register" style={{textDecoration: "none"}}>
            <Typography
              className="auth-footer"
              sx={{
                display: "block",
                mt: 3,
                fontSize: 15,
              }}
            >
              New to the salon?
              <span className="auth-footer-span-text">
                {" "}
                Request an invitation
              </span>
            </Typography>
          </Link>
        </Paper>
      </main>
    </div>
  );
};

export default LoginComponent;
