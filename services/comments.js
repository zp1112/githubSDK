/**
 * Created by Candy on 2018/4/9.
 */

export default function(opts) {
  return {query: `{
      repository(owner: ${opts.owner ? `"${opts.owner}"` : '"zp1112"'}, name: ${opts.name ? `"${opts.name}"` : '"blog"'}) {
        issue(number: ${opts.number}) {
          number
          comments(first: ${opts.first || 5}, ${opts.after ? `after: "${opts.after}"` : '' }) {
            pageInfo {
              hasNextPage
              endCursor
            }
            totalCount
            edges {
              node {
                updatedAt
                bodyHTML
                author {
                  avatarUrl
                  login
                  url
                }
              }
            }
          }
        }
      }
    }`}
}
