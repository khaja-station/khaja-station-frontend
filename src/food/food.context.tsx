import React, { createContext } from 'react';
import { Children, Dispatch } from 'common/common.types';

import { Categories, MenuPayload, Menus, FoodItemPayload } from './food.type';
import { category, menu, food } from './food-context.types';

interface FoodContextType {
  menus: Menus;
  categories: Categories;
  menu: MenuPayload | null;
  foodItem: Partial<FoodItemPayload>;
  foodItems: Partial<FoodItemPayload>[];
}

const initialState: FoodContextType = {
  categories: {
    paging: null,
    result: [],
  },
  menus: {
    paging: null,
    result: [],
  },
  menu: null,
  foodItem: {},
  foodItems: [],
};

const FoodStateContext = createContext<FoodContextType | undefined>(undefined);
const FoodDispatchContext = createContext<Dispatch | undefined>(undefined);

function foodReducer(state: FoodContextType = initialState, action: any) {
  switch (action.type) {
    case category.ADD_CATEGORY: {
      return { ...state };
    }
    case category.ADD_CATEGORY_SUCCESS: {
      return { ...state, category: action.payload.category };
    }
    case category.ADD_CATEGORY_FAILURE: {
      return { ...state };
    }

    case category.ADD_CATEGORIES: {
      return { ...state };
    }
    case category.ADD_CATEGORIES_SUCCESS: {
      const paging = action.payload.categories?.paging;
      const result = action.payload.categories?.result;
      return {
        ...state,
        categories: { paging, result },
      };
    }
    case category.ADD_CATEGORIES_FAILURE: {
      return { ...state };
    }

    case menu.ADD_MENUS: {
      return { ...state };
    }
    case menu.ADD_MENUS_SUCCESS: {
      const paging = action.payload.menus?.paging;
      const result = action.payload.menus?.result;
      return {
        ...state,
        menus: {
          paging,
          result,
        },
      };
    }
    case menu.ADD_MENUS_FAILURE: {
      return { ...state };
    }

    case menu.ADD_MENU: {
      return { ...state };
    }

    case menu.ADD_MENU_SUCCESS: {
      const singleMenu = action.payload.menu;
      return {
        ...state,
        menu: singleMenu,
      };
    }

    case menu.ADD_MENU_FAILURE: {
      return { ...state };
    }

    case food.ADD_FOOD_ITEM_PROPERTY: {
      const value: any = action.payload.value;
      const filed: keyof FoodItemPayload = action.payload.property;

      return {
        ...state,
        foodItem: {
          ...state.foodItem,
          [filed]: value,
        },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FoodProvider({ children }: Children) {
  const [state, dispatch] = React.useReducer(foodReducer, initialState);
  return (
    <FoodStateContext.Provider value={state}>
      <FoodDispatchContext.Provider value={dispatch}>{children}</FoodDispatchContext.Provider>
    </FoodStateContext.Provider>
  );
}

function useFoodState() {
  const context = React.useContext(FoodStateContext);
  if (context === undefined) {
    throw new Error('useFoodState must be used within a Auth Provider');
  }
  return context;
}

function useFoodDispatch() {
  const context = React.useContext(FoodDispatchContext);
  if (context === undefined) {
    throw new Error('foodDispatch must be used within a Auth Provider');
  }
  return context;
}

export { FoodProvider, useFoodDispatch, useFoodState };
