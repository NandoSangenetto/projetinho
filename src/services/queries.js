import gql from "graphql-tag";

export const countriesQuery = gql`
  query getCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

export const countryQuery = gql`
  query getCountry($code: String!) {
    country(code: $code) {
      code
      name
      emoji
      currency
      languages {
         name
      }
    }
  }
`;

export default {
  countriesQuery,
  countryQuery
};
