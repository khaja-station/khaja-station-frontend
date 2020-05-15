export interface SidebarPropertyType {
  icon?: React.ReactNode;
  title: string;
  route: string;
  component: React.ReactNode;
}

export interface SidebarItemType {
  item: SidebarPropertyType;
}

export enum MenuKey {
  FOOD,
  ORDER,
  CUSTOMER,
  DASHBOARD,
  PROMOTION,
}
