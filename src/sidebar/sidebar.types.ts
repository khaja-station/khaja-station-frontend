export interface SidebarPropertyType {
  title: string;
  route: string;
  component: React.ReactNode;
}

export interface SidebarItemType {
  item: SidebarPropertyType;
}
