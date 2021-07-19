/**
 * 关于 ES6 模块化
 * - 引入 非默认模块
 * - 引入 非默认模块并重命名
 * - 引入 所有非默认模块并重命名
 * - 引入 默认模块
 * - 引入 默认模块并重命名
 * - 引入 默认模块和非默认模块并重命名
 * - 引入 异步模块
 */

import { item } from '';
import { item as myItem } from '';
import * as items from '';
import item from '';
import { default as myItem, item } from 'prop-types';
import('').then((res) => {
  res;
});

/**
 * 关于 export
 * - 抛出非默认模块
 * - 抛出默认模块
 */
export const item = function () {};
export default item = function () {};

/**
 * 关于 export + import
 * - 抛出引入模块
 * - 引入默认模块 当作普通模块 抛出
 * - 引入一个普通模块当作 默认模块抛出
 */
export { item } from '';
export {default as item} from '';
export {item as default} from '';


/**
 * CommonJS 模块化
 * - require 引入模块
 * - define 异步引入模块
 * - module.exports 抛出一个模块
 */

const item = require('');
define('moduleA', ['require'], function(require) {
  if (condition) {
    var moduleB = require('moduleB');
  }
});
module.exports = function(){};