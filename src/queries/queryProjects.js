import { gql } from 'graphql-request';

export const QUERY_PROJECTS = gql`
  query {
    projectCollection {
      __typename
      items {
        __typename
        type
        slug
        technologyIconsCollection {
          items {
            url
            width
            height
            title
          }
        }
        projectImageCta {
          url(transform: { format: WEBP })
        }
        projectName
        enProjectName: projectName(locale: "en-US")
        enType: type(locale: "en-US")
        enDescription: description(locale: "en-US")
        projectOverview {
          json
        }
        sys {
        id
        }
        date
        description
        demoLink
        repositoryLink
        designStack
        content {
          json
        }
        projectImageGalleryCollection(limit: 5) {
          items {
            url(transform: { format: WEBP })
            title
            fileName
          }
        }
      }
    }
  }
`;

/**
 * QUERY FOR MULTILANGUAGE
 * 
 * query {
  projectCollection {
    items {
     en_projectName: projectName(locale:"en-US")
      es_projectName: projectName(locale:"es-PE")
      en_type: type(locale:"en-US")
      es_type: type
      en_description: description(locale:"en-US")
      es_description: description(locale:"es-PE")
      projectContent {
        json 
      }
       en_projectContent: projectContent(locale:"en-US") {
        json 
      }
    }
  }
}
 * 
 * 
//  * Filtrar por tipo de proyecto
 * query {
  projectCollection(where:{type:"Desarrollo Web" }){
    items {
      projectName 
      en_projectName: projectName(locale: "en-US")
    }
  } 
}
 * 
 * 
 * 
 */
