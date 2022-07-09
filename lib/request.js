import { GraphQLClient } from 'graphql-request';

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

const options = {
  headers: {
    authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

const getDataQuery = async (query) => {
  let results;
  try {
    const graphQLClient = new GraphQLClient(endpoint, options);

    results = await graphQLClient.request(query);
  } catch (error) {
    console.log(error);
  }

  return results;
};

export default getDataQuery;
