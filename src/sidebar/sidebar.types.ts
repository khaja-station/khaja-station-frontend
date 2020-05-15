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
export interface MenuItemType {
  icon: React.ReactNode;
  name: string;
  key: MenuKey;
  child: React.ReactNode;
}

export interface DashboardMenuItemProps {
  props: {
    icon: React.ReactNode;
    name: string;
    key: MenuKey;
    toggleExpansion: (key: MenuKey) => void;
    chevronIcon: (key: MenuKey) => void;
    isExpanded: (key: MenuKey) => boolean;
    child: React.ReactNode;
  };
}
