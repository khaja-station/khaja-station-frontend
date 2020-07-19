import { appRouteConstants } from 'app/app-route.constant';

export const sidebarData = {
  dashboard: {
    title: 'DASHBOARD',
    route: '/dashboard',
  },
  food: [
    {
      title: 'FOOD_CATEGORY',
      route: '/cat',
    },
    {
      title: 'FOOD_LIST',
      route: '/food/item/list',
    },
    {
      title: 'FOOD_GRID',
      route: '/food/item/grid',
    },
    {
      title: 'FOOD_ITEM',
      route: '/food/item',
    },
    {
      title: 'ADD_FOOD',
      route: appRouteConstants.food.item.add,
    },
  ],
  order: {
    title: 'ORDER',
    route: '/order',
  },
  promotion: {
    title: 'PROMOTION',
    route: '/promotion',
  },
};
