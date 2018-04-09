"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (opts) {
  return { query: "{\n      repository(owner: " + (opts.owner ? "\"" + opts.owner + "\"" : "zp1112") + ", name: " + (opts.name ? "\"" + opts.name + "\"" : "blog") + ") {\n        issues(first: " + (opts.first || 7) + ", states: OPEN, orderBy: {field: UPDATED_AT, direction: DESC}, \n        " + (opts.after ? "after: " + opts.after : '') + ") {\n          pageInfo {\n            hasPreviousPage\n            startCursor\n            hasNextPage\n            endCursor\n          }\n          totalCount\n          edges {\n            node {\n              number\n              title\n              author {\n                avatarUrl\n                login\n                url\n              }\n              updatedAt\n              labels(first: 3) {\n                edges {\n                  node {\n                    color\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }" };
};