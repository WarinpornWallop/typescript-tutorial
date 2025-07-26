"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: string;
}
export default function AddUserComponent() {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  });

  const handleChange =
    (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ส่ง user ไป API
    console.log("User added:", user);
    router.push("/user/usermanagement");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              label="Name"
              value={user.name}
              onChange={handleChange("name")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Username"
              value={user.username}
              onChange={handleChange("username")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Email"
              value={user.email}
              onChange={handleChange("email")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Phone"
              value={user.phone}
              onChange={handleChange("phone")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Website"
              value={user.website}
              onChange={handleChange("website")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Company"
              value={user.company}
              onChange={handleChange("company")}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>
          Add User
        </Button>
      </form>
    </Box>
  );
}
