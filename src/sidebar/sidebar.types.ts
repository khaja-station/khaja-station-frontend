export interface SidebarPropertyType {
  title: string;
  route: string;
  icon?: React.ReactNode;
}

export interface SidebarItemType {
  item: SidebarPropertyType;
}

export enum MenuKey {
  FOOD,
  MENU,
  ORDER,
  CUSTOMER,
  DASHBOARD,
  PROMOTION,
}
export interface MenuItemType {
  name: string;
  key: MenuKey;
  icon: React.ReactNode;
  child: React.ReactNode;
}

export interface DashboardMenuItemProps {
  props: {
    name: string;
    key: MenuKey;
    icon: React.ReactNode;
    child: React.ReactNode;
    chevronIcon: (key: MenuKey) => void;
    isExpanded: (key: MenuKey) => boolean;
    toggleExpansion: (key: MenuKey) => void;
  };
}
