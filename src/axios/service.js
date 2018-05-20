const divName =
  process.env.NODE_ENV && process.env.NODE_ENV === 'development'
    ? ''
    : ''
const hostName =
  process.env.NODE_ENV && process.env.NODE_ENV === 'development'
    ? 'https://apple.myysq.com.cn'
    : ''
const apiHost = hostName + divName

class Service {
  // 获取登入的用户信息
  static getLoginData = `${apiHost}/bms/Organization/layout/get-login-info`;
  // 获取头部导航栏数据
  static getNavigation = `${apiHost}/bms/Organization/layout/get-navigation`;

  static getAppAuth = `${apiHost}/bms/applicationAuth/application-auth/get-app-auth`;

  static getMetnu = `${apiHost}/bms/Organization/layout/get-menus?app_code=ManagementCenter`;

  static getLoginOut = `${
    hostName || window.hostname
  }/bms/auth/logout`;

  static getDmpList = `${apiHost}/bms/dataService/data-service/get-dmp-list`;

  static getMenuList = `${apiHost}/bms/Organization/layout/get-menus?app_code=DataService&__FLAG__=true`;
  static getLogoutUrl = `${hostName}/bms/auth/logout`
}

export default Service
