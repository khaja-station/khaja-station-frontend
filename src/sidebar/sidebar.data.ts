import { DashboardView } from 'dashboard/views';

export const sidebarData = {
  dashboard: {
    title: 'DASHBOARD',
    route: '/dashboard',
    component: DashboardView,
  },
  food: [
    {
      title: 'FOOD_CATEGORY',
      route: '/food-category',
      component: 'FoodCategory',
    },
    {
      title: 'FOOD_LIST',
      route: '/food-list',
      component: 'FoodList',
    },
    {
      title: 'FOOD_GRID',
      route: '/food-grid',
      component: 'FoodGrid',
    },
    {
      title: 'FOOD_ITEM',
      route: '/food-category',
      component: 'FoodItem',
    },
    {
      title: 'ADD_FOOD',
      route: '/add-food',
      component: 'AddFood',
    },
  ],
  order: {
    title: 'ORDER',
    route: '/order',
    component: 'Order',
  },
  promotion: {
    title: 'PROMOTION',
    route: '/promotion',
    component: 'Promotion',
  },
};
