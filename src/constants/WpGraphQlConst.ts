export class WpGraphQlPostConst {
  static list = `query PostListQuery {
    posts {
      edges {
        node {
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          slug
          title
          tags {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`;

  static one = `query PostQuery($id: ID!) {
      post(id: $id, idType: SLUG) {
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      date
      content
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      id
      slug
      title
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
  }`;

  static allSulagList = `query PostAllSulgListQuery {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
  `;
}
