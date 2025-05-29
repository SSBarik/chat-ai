import { FileText, Sparkles, Zap } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
    url: "#",
  },
  {
    title: "Elit quisque faucibus",
    url: "#",
  },
  {
    title: "Amet consectetur adipiscing elit quisque faucibus.",
    url: "#",
  },
  {
    title: "Sit amet consectetur adipiscing elit quisque faucibus.",
    url: "#",
  },
  {
    title: "Ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Chat AI</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button variant={"secondary"}>
            <Zap /> Ongoing prompt
          </Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Past</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <FileText />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant={"outline"} className="shadow-md">
          <Sparkles /> Start new chat
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
