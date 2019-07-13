import { AsyncStorage } from 'react-native';

export const ASYNC_STORAGE = {
  CART_ID: 'CART_ID',
  USER_INFO: 'userInfo',
  RECENT_SEARCH: 'RECENT_SEARCH',
  COUNTRY_INFO: 'COUNTRY_INFO',
};
export async function setUserInfo(userInfo, token) {
  console.log(userInfo, 'userInfo');
  userInfo.token = token;
  const briefName = createBriefName(userInfo.lastname, userInfo.firstname);
  const userName = `${userInfo.lastname} ${userInfo.firstname}`;
  userInfo.userNameBrief = briefName;
  userInfo.userName = userName;
  await AsyncStorage.setItem(ASYNC_STORAGE.USER_INFO, JSON.stringify(userInfo)).catch((e) => {
    return userInfo;
  });
  return userInfo;
}

/**
 * Capitalize and return first character of string
 * @param {string} string : string to get first capitalize character
 */
export function capitalizeFirst(string) {
  return string && string.charAt(0).toUpperCase();
}

/**
 * Get brief name string
 * @param {string} fisrtname
 * @param {string} lastname
 */
export function createBriefName(fisrtname, lastname) {
  return capitalizeFirst(fisrtname) + capitalizeFirst(lastname);
}