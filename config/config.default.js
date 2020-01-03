/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577950187322_301';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

// 配置服务器基本信息
  config.cluster = {
      listen: {
        path: '',
        port: 8000,
        hostname: '192.168.0.109',//默认localhost和ip地址,上线时用0.0.0.0
      }
    };

  return {
    ...config,
    ...userConfig,
  };
};
