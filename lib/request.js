import { GraphQLClient } from "graphql-request";
import crossFetch from "cross-fetch";

const requestData = async (query) => {
  let results;
  try {
    const endpoint = "https://awesomebootcamp.000webhostapp.com/graphql";
    const fetch = require("fetch-cookie")(crossFetch);
    const graphQLClient = new GraphQLClient(endpoint, { fetch });

    results = await graphQLClient.request(query);
  } catch (error) {
    console.log(error);
  }

  return results;
};

export default requestData;
