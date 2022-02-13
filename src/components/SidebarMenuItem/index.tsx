import React from "react";
import Button from "components/Button";

const SidebarMenuItem: React.FC = ({ children }) => {
  return (
    <Button
      rounded={4}
      className="text-left font-medium"
      style={{ color: "white" }}
      fullWidth
    >
      {children}
    </Button>
  );
};

export default SidebarMenuItem;
