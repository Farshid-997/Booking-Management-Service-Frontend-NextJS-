"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Input, message } from "antd";

import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { useState } from "react";

import { useDebounced } from "@/redux/hooks/hooks";
import UMTable from "@/components/ui/Table";

import ActionBar from "@/components/ui/ActionBar/ActionBar";

import {
  useDeleteBookingMutation,
  useGetBookingQuery,
} from "@/redux/api/bookingApi";

const ManageBooking = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading } = useGetBookingQuery({ ...query });

  const [deleteBooking] = useDeleteBookingMutation();
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

  const booking = data?.booking;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      await deleteBooking(id);
      message.success("User Booking Deleted  successfully!");
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
      title: "User Name",
      dataIndex: "user.name",
      render: function (data: any, record: any) {
        const userName = record.user?.name || "User Not Found";
        return userName;
      },
    },
    {
      title: "status",
      dataIndex: "status",
    },

    {
      title: "Price",
      dataIndex: "s",
      render: function (data: any, record: any) {
        const price = record.service?.price || "Price not found";
        return price;
      },
    },

    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Service Name",
      dataIndex: "service.name",
      render: function (data: any, record: any) {
        const serviceName = record.service?.name || "Service name Not Found";
        return serviceName;
      },
    },

    {
      title: "Service Category",
      dataIndex: "service.category",
      render: function (data: any, record: any) {
        const serviceCategory =
          record.service?.category || "Service Category Not Found";
        return serviceCategory;
      },
    },

    {
      title: "Contact NO",
      dataIndex: "user.contactNo",
      render: function (data: any, record: any) {
        const serviceCategory =
          record.user?.contactNo || "User conact  Not Found";
        return serviceCategory;
      },
    },

    {
      title: "Email",
      dataIndex: "user.email",
      render: function (data: any, record: any) {
        const serviceCategory = record.user?.email || "user email Not Found";
        return serviceCategory;
      },
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
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ActionBar title="Manage Booking">
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
        dataSource={booking}
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

export default ManageBooking;
