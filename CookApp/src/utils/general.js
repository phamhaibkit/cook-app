import { AsyncStorage } from 'react-native';
import _ from 'lodash';

export const ASYNC_STORAGE = {
  CART_ID: 'CART_ID',
  USER_INFO: 'userInfo',
  RECENT_SEARCH: 'RECENT_SEARCH',
  COUNTRY_INFO: 'COUNTRY_INFO',
};
export async function setUserInfo(userInfo, token) {
  console.log(userInfo, 'userInfo');
  // userInfo.token = token;
  // const briuserNameefName = userInfo.fullName;
  // const userName = `${userInfo.lastname} ${userInfo.firstname}`;
  // userInfo.userNameBrief = briefName;
  // userInfo.userName = userName;
  await AsyncStorage.setItem(ASYNC_STORAGE.USER_INFO, JSON.stringify(userInfo)).catch((e) => {
    return userInfo;
  });
  return userInfo;
}

/**
 * Capitalize first character of string
 * @param {string} string: string to capitalize
 */
export function capitalize(string) {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Get brief name string
 * @param {string} fisrtname
 * @param {string} lastname
 */
export function createBriefName(fisrtname, lastname) {
  return capitalizeFirst(fisrtname) + capitalizeFirst(lastname);
}

/**
 * Print a number with dot as thousands separators
 * @param {Number} number
 */
export function formatNumberWithDot(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

/**
 * Get currency string from number
 * @param {number} inputNumber: number to get currency string
 */
export function getCurrencyStr(num) {
  if(!num){
    return;
  }
  const array = num.toString().split('');
  let index = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, '.');
    // Decrement by 4 since we just added another unit to the array.
    index -= 4;
  }
  return array.join('') + 'đ';
}

export function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

export const handleError = (error) => {
  const errorString = _.get(error, 'data.error.errorMessage');
  console.log(error);
  return errorString;
}

export const requireField = (text, name) => {
  if (text.length === 0) {
    return `Vui lòng nhập ${name}`;
  }
};