/**
 * Created by Candy on 2018/4/9.
 */
export default function(opts) {
  return {query: `{
      repository(owner: ${opts.owner ? `"${opts.owner}"` : "zp1112"}, name: ${opts.name ? `"${opts.name}"` : "blog"}) {
        issues(first: ${opts.first || 7}, states: OPEN, orderBy: {field: UPDATED_AT, direction: DESC}, 
        ${opts.after ? `after: ${opts.after}` : '' }) {
          pageInfo {
            hasPreviousPage
            startCursor
            hasNextPage
            endCursor
          }
          totalCount
          edges {
            node {
              number
              title
              author {
                avatarUrl
                login
                url
              }
              updatedAt
              labels(first: 3) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`}
}
