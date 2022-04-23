import { gql } from "graphql-request";

export const QUERY_SITE_DATA = gql`
  {
    generalSettings {
      description
      language
      title
    }
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;

export const QUERY_SEO_DATA = gql`
  {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;
