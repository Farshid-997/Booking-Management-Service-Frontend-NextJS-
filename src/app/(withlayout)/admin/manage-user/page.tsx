"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Input, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";

import { useDebounced } from "@/redux/hooks/hooks";
import UMTable from "@/components/ui/Table";

import ActionBar from "@/components/ui/ActionBar/ActionBar";
import dayjs from "dayjs";
import { useDeleteUserMutation, useGetUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/service/auth.service";

const ManageUser = () => {
  const query: Record<string, any> = {};
  const { role } = getUserInfo() as any;
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteUser] = useDeleteUserMutation();
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetUserQuery({ ...query });

  const user = data?.user;
  const meta = data?.meta;
  const deleteHandler = async (id: string) => {
    try {
      await deleteUser(id);
      message.success("User Deleted successfully!");
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "UserName",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNo",
    },

    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Role",
      dataIndex: "role",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-user/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                  marginBottom: "3px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data)}
              type="primary"
              danger
              style={{ marginLeft: "4px" }}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "manage-service",
            link: `/${role}/manage-service`,
          },
        ]}
      />
      <ActionBar title="Manage User">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
            marginLeft: "1rem",
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={user}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageUser;
