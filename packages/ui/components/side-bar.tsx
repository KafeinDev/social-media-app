import React from "react";

import { cn } from "../lib/cn";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SideBar = (props: Props) => {
  return (
    <div className={cn("flex min-w-64 flex-col bg-sidebar", props.className)}>
      {props.children}
    </div>
  );
};

export default SideBar;
