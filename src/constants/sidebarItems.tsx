import { Avatar, type MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
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

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

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

    {
      label: "Manage Booking",
      key: "manage-booking",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
          key: `/${role}/manage-booking`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },

    // {
    //   label: "Manage permission",
    //   key: "manage-permission",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/permission`}>View permissions</Link>,
    //       key: `/${role}/permission`,
    //     },
    //   ],
    // },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/${role}/MyBookings`}>My Bookings</Link>,
      icon: <TableOutlined />,
      key: `/${role}/service`,
    },

    {
      label: <Link href={`/${role}/review`}>Service Review</Link>,
      icon: <TableOutlined />,
      key: `/${role}/review`,
    },

    {
      label: <Link href={`/${role}/payment`}>My Payments</Link>,
      icon: <TableOutlined />,
      key: `/${role}/payment`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
