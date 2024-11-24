import { Spin } from "antd";
import React from "react";

export default function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Spin size="large" />
    </div>
  );
}
