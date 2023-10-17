import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    // {
    //   label: <Link href={`/${role}/manage-user`}>Manage Users</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/manage-user`,
    // },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "My Profile",
      key: "my-profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/my-profile`}>My Profile</Link>,
          key: `/${role}/my-profile`,
        },
      ],
    },

    {
      label: "Manage User",
      key: "manage-user",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
          key: `/${role}/manage-user`,
        },
      ],
    },

    {
      label: "Add Service",
      key: "add-service",
      icon: <FolderAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/add-service`}>Add Service</Link>,
          key: `/${role}/add-service`,
        },
      ],
    },

    {
      label: "Manage Service",
      key: "manage-service",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-service`}>Manage Service</Link>,
          key: `/${role}/manage-service`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },

    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },

    {
      label: "Manage permission",
      key: "manage-permission",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/permission`}>View permissions</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    // {
    //   label: <Link href={`/${role}/profile`}>My Profile</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/profile`,
    // },

    {
      label: <Link href={`/${role}/service`}>My Services</Link>,
      icon: <TableOutlined />,
      key: `/${role}/service`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
