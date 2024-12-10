import React from "react";
import { Button } from "antd";

const CustomButton = ({
  buttonLabel,
  className = "text-black",
  shape = "default",
  size = "middle",
  onClick = null,
  icon = null,
  isLoading,
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      className={className}
      onClick={onClick}
      icon={icon}
      loading={isLoading}
    >
      {buttonLabel}
    </Button>
  );
};

export default CustomButton;
