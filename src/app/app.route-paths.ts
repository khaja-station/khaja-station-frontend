export const appRoutes = {
  dashboard: {
    title: 'DASHBOARD',
    route: '/dashboard',
  },
  food: [
    {
      title: 'FOOD_CATEGORY',
      route: '/food/cat',
    },
    {
      title: 'FOOD_LIST',
      route: '/food/list',
    },
    {
      title: 'FOOD_GRID',
      route: '/food/grid',
    },
    {
      title: 'FOOD_ITEM',
      route: '/food/item',
    },
    {
      title: 'ADD_FOOD',
      route: '/food/add',
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
  user: [
    {
      title: 'PROFILE',
      route: '/auth/me',
    },
    {
      title: 'LOGOUT',
      route: '/auth/logout',
    },
  ],
};
