import EditUserComponent from "@/components/user/edit-user";
interface EditUserPageProps {
  params: { id: string };
}
export default async function EditUser({ params }: EditUserPageProps) {
    const paramsData = await params;
  const userId = paramsData.id;
  return (
    <EditUserComponent userId={userId} />
  );
}