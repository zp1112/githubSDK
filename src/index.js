/**
 * Created by Candy on 2018/4/9.
 */
import axios from 'axios';

const DEFAULTS = {
  Authorization: ''
};
// 公共的options
const lazyLoad = (options) => {
  return new Proxy({}, {
    get: (target, property) => (opts) => {
      const settings = {
        api: 'https://api.github.com/graphql'
      };
      const params = Object.assign({}, DEFAULTS, options, opts);
      return new Promise((resolve, reject) => {
        axios({
          url: settings.api,
          headers: {
            Authorization: params.Authorization
          },
          method: 'post',
          data: require('./services/' + property.toLowerCase() + '.js').default(opts)
        }).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err)
        });
      })
    }
  });
};
export default lazyLoad;
