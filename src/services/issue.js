/**
 * Created by Candy on 2018/4/9.
 */
export default function(opts) {
  return {query: `{
      repository(owner: ${opts.owner ? `"${opts.owner}"` : '"zp1112"'}, name: ${opts.name ? `"${opts.name}"` : '"blog"'}) {
        issue(number: ${opts.number || 0}) {
          title
          author {
            avatarUrl
            login
            url
          }
          bodyHTML
          updatedAt
          labels(first: 3) {
            edges {
              node {
                color
                name
              }
            }
          }
          number
          comments {
            totalCount
          }
        }
      }
    }`}
}
