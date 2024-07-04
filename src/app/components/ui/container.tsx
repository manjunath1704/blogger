import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={`max-w-screen-xl xl:max-w-screen-2xl w-11/12 m-auto ${className}`}>{children}</div>;
};

export default Container;