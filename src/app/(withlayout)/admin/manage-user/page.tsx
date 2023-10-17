"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";

export default function page() {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "manage-user",
            link: `/${role}/manage-user`,
          },
        ]}
      />
      <h1>Manage the Users</h1>
    </div>
  );
}
