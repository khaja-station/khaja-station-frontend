import { makeTypes } from 'common/common-helper';

export const category = {
  ...makeTypes('ADD_CATEGORY'),
  ...makeTypes('ADD_CATEGORIES'),
};

export const menu = {
  ...makeTypes('ADD_MENU'),
  ...makeTypes('ADD_MENUS'),
};

export const food = {
  ...makeTypes('ADD_FOOD_ITEM_PROPERTY'),
};
