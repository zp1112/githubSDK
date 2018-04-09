"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (opts) {
  return { query: "{\n      repository(owner: " + (opts.owner ? "\"" + opts.owner + "\"" : "zp1112") + ", name: " + (opts.name ? "\"" + opts.name + "\"" : "blog") + ") {\n        issue(number: " + (opts.number || 0) + ") {\n          title\n          author {\n            avatarUrl\n            login\n            url\n          }\n          bodyHTML\n          updatedAt\n          labels(first: 3) {\n            edges {\n              node {\n                color\n                name\n              }\n            }\n          }\n          number\n          comments {\n            totalCount\n          }\n        }\n      }\n    }" };
};