import { ApiResponse } from 'api/api.types';
import { StringKeyObject } from './common.types';

const toString = Object.prototype.toString;

export const isObject = (arg: any): boolean => {
  return toString.call(arg) === '[object Object]';
};

export const withError = (arg: any): ApiResponse => {
  if (isObject(arg)) {
    const { message = '', ...rest } = arg;

    return {
      data: null,
      error: {
        status: true,
        message,
        ...rest,
      },
    };
  }

  return {
    data: null,
    error: {
      status: true,
      message: arg,
    },
  };
};

export const withData = (data: any): ApiResponse => ({
  error: null,
  data,
});

export const serialize = (data: object): string => JSON.stringify(data);

export const parse = (data: string): StringKeyObject => {
  try {
    const parsedData = JSON.parse(data);

    return withData(parsedData);
  } catch (error) {
    return withError(error);
  }
};

export const isEmpty = (value: any) =>
  !value ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const getReadingTime = (content: string) => {
  const wordsPerMinute = 200;

  const textLength = content.split(' ').length;
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);
  }

  return 0;
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export const makeTypes = (type: string) => {
  return {
    [type]: type,
    [`${type}_SUCCESS`]: `${type}_SUCCESS`,
    [`${type}_FAILURE`]: `${type}_FAILURE`,
  };
};

/**
 * @description al is shortcut for Adjust Language
 * This will convert CAPITAL_LETTER to be used
 * in language file
 */
export const al = (word: string): string => {
  return word.split(' ').join('_').toUpperCase();
};
