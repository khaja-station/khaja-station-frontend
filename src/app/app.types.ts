export const appTypes = {
  SET_DARK_THEME: 'SET_DARK_THEME',
  SET_LIGHT_THEME: 'SET_LIGHT_THEME',
};

export enum StorageKey {
  AUTH = 'auth',
}

export interface StringKeyObject {
  [key: string]: any;
}

export enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}
