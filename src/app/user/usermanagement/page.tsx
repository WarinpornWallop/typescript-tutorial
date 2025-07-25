import Reacct from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { headers } from "next/headers";
import UserManagementComponent from '@/components/user/usermanagement';



export default async function UserManagement() {
  const headersList = await headers();
  const protocol =
    headersList.get("x-forwarded-proto") ||
    (headersList.get("host")?.includes("localhost") ? "http" : "https");

  const host = headersList.get("host");
  const domain = `${protocol}://${host}`;

  return <UserManagementComponent domain={domain} />;
}

