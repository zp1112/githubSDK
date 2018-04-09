'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = {
  Authorization: ''
};

var lazyLoad = function lazyLoad(options) {
  return new Proxy({}, {
    get: function get(target, property) {
      return function (opts) {
        var settings = {
          api: 'https://api.github.com/graphql'
        };
        var params = (0, _assign2.default)({}, DEFAULTS, options, opts);
        return new _promise2.default(function (resolve, reject) {
          (0, _axios2.default)({
            url: settings.api,
            headers: {
              Authorization: params.Authorization
            },
            method: 'post',
            data: require('./services/' + property.toLowerCase() + '.js').default(opts)
          }).then(function (res) {
            resolve(res.data);
          }).catch(function (err) {
            reject(err);
          });
        });
      };
    }
  });
};
exports.default = lazyLoad;