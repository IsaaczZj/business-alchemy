"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ActiveLink({
  children,
  href,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "font-medium hover:border-b hover:border-blue-200 hover:transition-colors hover:duration-300",
        pathname === href
          ? "border-b border-blue-200 text-blue-200"
          : "text-gray-100",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
