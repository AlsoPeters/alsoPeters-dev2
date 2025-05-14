import { Rss, User, Code } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
  
 // Menu items.
const items = [
  {
    title: "About",
    url: "/",
    icon: User,
  },
  {
    title: "Projects",
    url: "projects",
    icon: Code,
  },
  {
    title: "Blog",
    url: "blog",
    icon: Rss,
  },
] 
  
  export function AppSidebar() {
    return (
      <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Kyle Ryan Garcia</SidebarGroupLabel>
            <SidebarContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
      </SidebarContent>


        <SidebarContent />
      </Sidebar>
    )
  }
  