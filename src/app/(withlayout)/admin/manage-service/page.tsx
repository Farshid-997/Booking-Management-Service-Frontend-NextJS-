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
import {
  useDeleteServiceMutation,
  useGetServiceQuery,
} from "@/redux/api/serviceApi";

const ManageService = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading } = useGetServiceQuery({ ...query });
  const [deleteService] = useDeleteServiceMutation();
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

  const service = data?.service;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      await deleteService(id);
      message.success("Service Deleted successfully!");
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
      title: "price",
      dataIndex: "price",
      sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description".slice(0, 11),
    },
    {
      title: "location",
      dataIndex: "location",
    },

    {
      title: "Availability",
      dataIndex: "availability",
    },

    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-service/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                  marginBottom: "3px",
                }}
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
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ActionBar title="Manage  Service">
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
          <Link href="/admin/add-service">
            <Button type="primary" style={{ marginRight: "2rem" }}>
              Create
            </Button>
          </Link>

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
        dataSource={service}
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

export default ManageService;
