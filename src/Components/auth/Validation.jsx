export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    return "";
  };
  
  export const validatePassword = (password) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return "Confirm Password is required.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return "";
  };
  
  export const validateName = (name) => {
    if (!name) return "Name is required.";
    if (name.length < 3) return "Name must be at least 3 characters.";
    return "";
  };
  