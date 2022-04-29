import { gql } from "graphql-request";

export const QUERY_PROJECTS = gql`
  {
    projects(first: 10) {
      edges {
        node {
          id
          featuredImage {
            node {
              id
            }
          }
          projectCustomFields {
            ctaImage {
              sourceUrl
            }
            technologies
            githubRepository
            demo
          }
          slug
          title
          uri
          categories {
            edges {
              node {
                name
              }
            }
          }
          date
          databaseId
          blocks {
            name
            ... on CoreImageBlock {
              attributes {
                ... on CoreImageBlockAttributes {
                  url
                  caption
                  sizeSlug
                  width
                  alt
                  rel
                  className
                }
              }
            }
            ... on CoreParagraphBlock {
              attributes {
                ... on CoreParagraphBlockAttributes {
                  content
                }
              }
            }
            ... on CoreListBlock {
              originalContent
              attributes {
                ... on CoreListBlockAttributes {
                  values
                }
              }
            }
            ... on CoreHeadingBlock {
              attributes {
                ... on CoreHeadingBlockAttributes {
                  content
                  level
                }
              }
            }
          }
        }
      }
    }
  }
`;
