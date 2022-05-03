import { GraphQLClient } from "graphql-request";

const requestData = async (query) => {
  let results;
  try {
    const endpoint = "https://awesomebootcamp.000webhostapp.com/graphql";

    const graphQLClient = new GraphQLClient(endpoint);

    results = await graphQLClient.request(query);
  } catch (error) {
    console.log(error);
  }

  return results;
};

export default requestData;
