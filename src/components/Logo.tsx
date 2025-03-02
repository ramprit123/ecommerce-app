import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
interface LogoProps {
  className?: string;
}

export const LogoImage = ({ className }: LogoProps) => {
  return (
    <div className={cn("relative h-36 w-36", className)}>
      <Image src="/images/logo.svg" alt="logo" fill className="h-28 w-28" />
    </div>
  );
};
