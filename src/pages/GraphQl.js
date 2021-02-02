import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GraphQl = () => {

  useEffect(() => {
    client
      .query({
        query: gql`
        query Start {
          books {
            title
          }
        }
        `,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ApolloProvider client={client}>Graph Ql</ApolloProvider>
  );
}

export default withRouter(GraphQl);

