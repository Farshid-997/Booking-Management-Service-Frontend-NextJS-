import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";

import React from "react";

export default function page() {
  const { role } = getUserInfo() as any;
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
      {
        label: "admin",
        link: `/${role}/admin`,
      },
    ]}
  />;
  return (
    <div>
      <h2>Manage Admin</h2>
    </div>
  );
}
