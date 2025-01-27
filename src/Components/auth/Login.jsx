// Login.js
import { TextField, Box, Typography, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate inputs
    let validationErrors = {};
    if (!email) validationErrors.email = "Email is required.";
    if (!password) validationErrors.password = "Password is required.";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle login
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      console.log("User logged in:", userCredential.user);
      navigate("/Home"); // Navigate to dashboard on success
    } catch (error) {
      console.error("Login error:", error.message);
      setErrors({ general: "Invalid email or password. Please try again." });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography color="primary" variant="h5" gutterBottom>
          Login
        </Typography>
        {errors.general && (
          <Typography color="error" variant="body2" gutterBottom>
            {errors.general}
          </Typography>
        )}
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
          required
          sx={{ my: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          required
          sx={{ my: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />

      
        <Button onClick={handleLogin} variant="contained" fullWidth>
          Login
        </Button>

        <Typography
          color="primary"
          variant="body2"
          gutterBottom
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
