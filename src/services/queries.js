import gql from "graphql-tag";

export const countriesQuery = gql`
  {
    countries {
      code
      name
      emoji
    }
  }
`;

export default {
  countriesQuery
};
