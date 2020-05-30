import React, { createContext } from 'react';
import { Children, Dispatch } from 'common/common.types';

import { CategoryPayload } from './food.type';
import { category } from './food-context.types';

interface FoodContextType {
  categories: CategoryPayload[];
}

const initialState: FoodContextType = {
  categories: [],
};

const FoodStateContext = createContext<FoodContextType | undefined>(undefined);
const FoodDispatchContext = createContext<Dispatch | undefined>(undefined);

function foodReducer(state: FoodContextType = initialState, action: any) {
  switch (action.type) {
    case category.ADD_CATEGORY: {
      return { ...state };
    }
    case category.ADD_CATEGORY_SUCCESS: {
      return { ...state, categories: action.payload.categories };
    }
    case category.ADD_CATEGORY_FAILURE: {
      return { ...state };
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
