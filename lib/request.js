import { GraphQLClient } from 'graphql-request';

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

const options = {
  headers: {
    authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

const getDataQuery = async (query, variables) => {
  const client = new GraphQLClient(endpoint, options);
  const response = await client.request(query, variables);
  return response;
};

export default getDataQuery;
