"use client";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CustomPaginationTable from "@/components/mui/table/table-pagination";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";

interface UserManagementProps {
  domain: string;
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export default function UserManagement({ domain }: UserManagementProps) {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
          <Typography variant="h4" gutterBottom>
            User Management: {domain}
          </Typography>

          <Button variant="contained" color="primary" href="/user/add">
            Add User
          </Button>
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h6" gutterBottom>
          User Table
        </Typography>
        <CustomPaginationTable
          columns={[
            { label: "Name", key: "name" },
            { label: "Username", key: "username" },
            { label: "Email", key: "email" },
            { label: "Phone", key: "phone" },
            { label: "Website", key: "website" },
            { label: "Company", key: "company", align: "left" },
            { label: "Actions", key: "actions", align: "center" },
          ]}
          rows={users.map((u) => ({
            ...u,
            company: u.company?.name ?? "-",
          }))}
          tableLabel="User Table"
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        />
      </Grid>
    </Grid>
  );
}
