import EditUserComponent from "@/components/user/edit-user";
interface EditUserPageProps {
  params: { id: string };
}
export default function EditUser ({params}: EditUserPageProps) {
  const userId = params.id;
    return (
        <EditUserComponent userId={userId} />
    );
}