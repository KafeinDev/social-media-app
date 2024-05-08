"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "../lib/cn";

type NavLinkWrapperProps = {
  child: NavLinkProps[];
};

const NavLinkWrapper = (props: NavLinkWrapperProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      {Object.values(props.child).map((child, index) => {
        return (
          <NavLink
            key={index}
            {...child}
            isSelected={child.href === pathname}
          />
        );
      })}
    </div>
  );
};

type NavLinkProps = {
  href: string;
  title: string;
  icon: JSX.Element;
  iconOutline?: JSX.Element;
  isSelected?: boolean;
};

const NavLink = (props: NavLinkProps) => {
  const icon = props.isSelected ? props.icon : props.iconOutline ?? props.icon;
  return (
    <Link href={props.href}>
      <div
        className={cn(
          "flex h-11 w-full items-center gap-5 rounded-md px-3 text-foreground-alt-2 hover:bg-secondary/30",
          {
            "bg-secondary/30 font-semibold text-foreground": props.isSelected,
          }
        )}
      >
        {icon}
        <p>{props.title}</p>
      </div>
    </Link>
  );
};

export { NavLinkWrapper, NavLink };
export type { NavLinkWrapperProps, NavLinkProps };
