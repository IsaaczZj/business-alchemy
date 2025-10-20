import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ActiveLink({
  children,
  href,
  ...props
}: ActiveLinkProps) {
  const { pathname } = useRouter();
  return (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors",
        pathname === href ? "text-blue-200" : "text-gray-100",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
