import { TextField, Box, Typography, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    user: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const { user, email, password, confirmpassword } = data;
  const navigate = useNavigate();

  const userHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear specific field error
    setGeneralError(""); // Clear general error on input change
  };

  const validate = () => {
    const newErrors = {};
    if (!user.trim()) newErrors.user = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format.";
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";
    if (password !== confirmpassword)
      newErrors.confirmpassword = "Passwords do not match.";
    return newErrors;
  };

  const register = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log("User registered successfully:", userCredential.user);
      navigate("/Home"); // Navigate to dashboard on success
    } catch (error) {
      console.error("Registration error:", error.message);
      setGeneralError(error.message);
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
          Register
        </Typography>
        {generalError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {generalError}
          </Alert>
        )}
        <TextField
          name="user"
          value={user}
          id="name"
          onChange={userHandler}
          label="Name"
          variant="outlined"
          fullWidth
          required
          sx={{ my: 2 }}
          error={!!errors.user}
          helperText={errors.user}
        />
        <TextField
          name="email"
          value={email}
          id="email"
          onChange={userHandler}
          label="Email"
          variant="outlined"
          fullWidth
          required
          sx={{ my: 2 }}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          name="password"
          value={password}
          id="password"
          onChange={userHandler}
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          sx={{ my: 2 }}
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          name="confirmpassword"
          value={confirmpassword}
          id="confirmpassword"
          onChange={userHandler}
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          sx={{ my: 2 }}
          error={!!errors.confirmpassword}
          helperText={errors.confirmpassword}
        />

        <Button onClick={register} variant="contained" fullWidth>
          Register
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
          onClick={() => navigate("/")}
        >
          Already have an account? Login
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
