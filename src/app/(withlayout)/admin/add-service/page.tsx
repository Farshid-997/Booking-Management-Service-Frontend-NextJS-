"use client";
import Form from "@/components/Forms/Form";
import { storeUserInfo } from "@/service/auth.service";
import React from "react";

export default function AddService() {
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h1>Add services</h1>

      <div>
        <Form SubmitHandler={onSubmit}></Form>
      </div>
    </div>
  );
}
