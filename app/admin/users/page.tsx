import AdminUserClient from "@/components/admin/user/AdminUserClient";
import { getAdmins } from "@/lib/action/auth";

const page = async () => {
  const data = await getAdmins();
  return (
    <div className="p-8 space-y-6">
      <AdminUserClient initialData={data || []} />
    </div>
  );
};

export default page;
