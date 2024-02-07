import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
};

const PrimaryButton = ({ children }: TButtonProps) => {
  return (
    <button className="bg-primary font-medium px-6 py-2 rounded-full text-lg">
      {children}
    </button>
  );
};

export default PrimaryButton;
