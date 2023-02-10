import { gql } from 'graphql-request';

export const QUERY_PROJECT = gql`
  query projectEntryQuery($id: String!) {
    project(id: $id) {
      slug
      designStack
      demoLink
      repositoryLink
      date
      technologyIconsCollection {
        items {
          url
          width
          height
          title
        }
      }
      type
      enType: type(locale: "en-US")
      projectName
      enProjectName: projectName(locale: "en-US")
      description
      enDescription: description(locale: "en-US")
      sys {
        id
      }
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              description
            }
          }
        }
      }
    }
  }
`;
