"use client";

import { Button, Input, message } from "antd";

import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { useState } from "react";

import { useDebounced } from "@/redux/hooks/hooks";
import UMTable from "@/components/ui/Table";

import ActionBar from "@/components/ui/ActionBar/ActionBar";

import { useDeleteBookingMutation } from "@/redux/api/bookingApi";
import { useDeleteUserMutation, useGetUserQuery } from "@/redux/api/userApi";

const ManageAdmin = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading } = useGetUserQuery({ ...query });

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

  const user = data?.user;

  const Fuser = data?.user.filter((u) => u?.role === "admin");

  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      await deleteUser(id);
      message.success("Admin Deleted  successfully!");
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
      title: "User Name",
      dataIndex: "username",
    },

    {
      title: "Admin",
      dataIndex: "email",
    },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
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
      <ActionBar title="Manage Admin">
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
        dataSource={Fuser}
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

export default ManageAdmin;
