"use client";
import React, { useEffect, useReducer, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AlertDialog from "@/components/mui/dialog/dialog";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CustomBreadcrumb from "@/components/mui/breadcrumb/basic-breadcrumb";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: string;
}
export default function EditUserComponent({ userId }: { userId?: string }) {
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  });
  const [open, setOpen] = useState(false);
  const [deleteModelOpen, setDeleteModelOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("User data submitted:", user);
    setOpen(false);
  };

  const handleDeleteUser = async () => {
    console.log("User deleted:", user);
    setDeleteModelOpen(false);
  };

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then((res) => res.json())
          .then((data) =>
            setUser({
              name: data.name,
              username: data.username,
              email: data.email,
              phone: data.phone,
              website: data.website,
              company: data.company.name,
            })
          );
      };
      fetchUser();
    }
  }, [userId]);

  return (
    <Box>
      <CustomBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Users", href: "/user/usermanagement" },
          { label: "Edit User", href: `/user/${userId}/edit` },
          
        ]}
        separator={<ChevronRightIcon fontSize="small" />}
      />
      <Typography variant="h4" gutterBottom>
        Edit User
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Website"
              name="website"
              value={user.website}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Company"
              name="company"
              value={user.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            color="error"
            sx={{ mt: 2 }}
            onClick={() => setDeleteModelOpen(true)}
          >
            Delete User
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => setOpen(true)}
          >
            Save Changes
          </Button>
        </Box>
      </form>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        onฺฺButtonOne={() => setResult("Cancel")}
        onฺฺButtonTwo={() => handleSubmit()}
        title="ยืนยันการทำรายการ"
        description={
          user.username
            ? `คุณต้องการบันทึกข้อมูลของ ${user.username} หรือไม่?`
            : "คุณต้องการบันทึกข้อมูลหรือไม่?"
        }
      />
      <AlertDialog
        open={deleteModelOpen}
        onClose={() => setDeleteModelOpen(false)}
        onฺฺButtonOne={() => setResult("Cancel")}
        onฺฺButtonTwo={() => handleDeleteUser()}
        title="ยืนยันการลบผู้ใช้"
        description={
          user.username
            ? `คุณต้องการลบผู้ใช้ ${user.username} หรือไม่?`
            : "คุณต้องการลบผู้ใช้หรือไม่?"
        }
      />
    </Box>
  );
}
