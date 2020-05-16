import { StorageKey } from './app.types';
import { serialize, parse } from 'common/common-helper';

const l = localStorage || window.localStorage;

export const getItem = (key: StorageKey) => {
  return l.getItem(key);
};

export const setItem = (key: StorageKey, item: string) => {
  l.setItem(key, item);
};

export const setUserDetails = (data: any) => {
  const serializedData = serialize(data);

  setItem(StorageKey.USER_DETAILS, serializedData);
};

export const getAccessToken = () => {
  const localData = getItem(StorageKey.USER_DETAILS);
  const parsedDetails: any = parse(localData || '');

  return parsedDetails?.token || null;
};

export const changeAccessToken = (token: string) => {
  const localData = getItem(StorageKey.USER_DETAILS);
  if (!localData) {
    const serializedToken = serialize({ token });
    setItem(StorageKey.USER_DETAILS, serializedToken);
  } else {
    const userDetails = { ...parse(localData), token };
    setItem(StorageKey.USER_DETAILS, serialize(userDetails));
  }
};
