"use client";
import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const PrimaryButton = ({ children, onClick, disabled }: TButtonProps) => {
  const handleClick = onClick || (() => {});
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="bg-primary font-medium px-6 py-2 rounded-full text-lg"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
