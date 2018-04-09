'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (opts) {
  return { query: '{\n      repository(owner: ' + (opts.owner ? '"' + opts.owner + '"' : '"zp1112"') + ', name: ' + (opts.name ? '"' + opts.name + '"' : '"blog"') + ') {\n        issue(number: ' + opts.number + ') {\n          number\n          comments(first: ' + (opts.first || 5) + ', ' + (opts.after ? 'after: "' + opts.after + '"' : '') + ') {\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            totalCount\n            edges {\n              node {\n                updatedAt\n                bodyHTML\n                author {\n                  avatarUrl\n                  login\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }' };
};