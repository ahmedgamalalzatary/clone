"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ClientBodyProps {
  children: ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
  const pathname = usePathname();

  return <>{children}</>;
}
