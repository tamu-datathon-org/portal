import React from "react";

export interface NavPillsProps {
  children: React.ReactNode;
  activeKey?: string;
}

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
  as?: string;
}
